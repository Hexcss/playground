import sys, pygame, pymunk, pymunk.pygame_util, math
from pyautogui import press

pygame.init()

WIDTH, HEIGHT = 1000, 800

screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Simulator")

def draw(screen, space, draw_options, line):
    screen.fill("white")
    
    if line:
        pygame.draw.line(screen, "black", line[0], line[1], 3)
    space.debug_draw(draw_options)
    
    pygame.display.update()

def create_ball(space, radius, mass, pos):
    body = pymunk.Body(body_type=pymunk.Body.STATIC) #Initialize body
    body.position = pos #Set Body position
    shape = pymunk.Circle(body, radius) #Takes in body and radius
    shape.mass = mass #Set mass
    shape.elasticity = 0.9 #Coeficient of elasticity
    shape.friction = 0.4 #Coeficient of friction
    shape.color = (255, 0, 0, 100) #RGBA
    space.add(body, shape) #Add to space
    return shape

def create_boundries(space, width, height):
    #Center of the rectangle, width and height of the rectangle
    rects = [
        [(width/2, height - 10), (width, 20)], #Floor
        [(width/2, 10), (width, 20)], #Ceiling
        [(10, height/2), (20, height)], #Wall
        [(width -10, height/2), (20, height)], #Wall
    ]
    
    for pos, size in rects:
        body = pymunk.Body(body_type=pymunk.Body.STATIC)
        body.position = pos
        shape = pymunk.Poly.create_box(body, size)
        shape.elasticity = 0.4 #Coeficient of elasticity
        shape.friction = 0.5 #Coeficient of friction
        space.add(body, shape) 
        
def calculate_distance(p1, p2): #Takes point 1 and point 2
    return math.sqrt((p2[1]-p1[1])**2 + (p2[0]-p1[0])**2) #Absolute distance between 2 points

def calculate_angle(p1, p2):
    return math.atan2(p2[1]-p1[1], p2[0]-p1[0]) #Gives angle in radiants between the two points assuming that p2 is at 0,0

def run(screen, width, height):
    run = True
    clock = pygame.time.Clock()
    fps = 60
    dt = 1 / fps #delta time or difference in time
    
    space = pymunk.Space()
    space.gravity = (0, 981) #gravity = 9.81, for this simulation we will multiply it by a factor of 100 as 9.81 would be too slow. In Pygame the lower you go the more y increases, therefore gravity must be positive instead of negative
     
    create_boundries(space, width, height)
    
    pressed_pos = None
    ball = None
    
    draw_options = pymunk.pygame_util.DrawOptions(screen)
    
    while run: 
        line = None
        if ball and pressed_pos:
            line = [pressed_pos, pygame.mouse.get_pos(ball)]
              
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False
                sys.exit
            if event.type == pygame.MOUSEBUTTONDOWN:               
                if not ball:
                    pressed_pos = pygame.mouse.get_pos()
                    ball = create_ball(space, 30, 10, pressed_pos) #Radius 30cm and 10g of mass for the sake of the simulation
                elif pressed_pos:
                    ball.body.body_type = pymunk.Body.DYNAMIC
                    angle = calculate_angle(*line)
                    force = calculate_distance(*line) * 50
                    #Vectorial decomposition of the force
                    fx = (math.cos(angle) * force)
                    fy = (math.sin(angle) * force)
                    #Apply force
                    ball.body.apply_impulse_at_local_point((fx, fy), (0, 0)) #Apply force. How much force (x,y) and where on the bpdy is that force going to be applied
                    pressed_pos = None
                else:
                    space.remove(ball, ball.body)
                    ball = None
               
        draw(screen, space, draw_options, line)
        space.step(dt) #How fast the simulation should go. Since the fps is 60, we will the step the simulation by 1/60 of a second
        clock.tick(fps)
        
    pygame.quit()

if __name__ == "__main__":
    run(screen, WIDTH, HEIGHT)       