import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

interface IProps {
    success: boolean;
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

const AlertSuccess: React.FC<IProps> = ({ success, setSuccess }) => {
  return (
    <Collapse in={success}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setSuccess(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Post has been added successfully!
        </Alert>
      </Collapse>
  )
}

export default AlertSuccess;