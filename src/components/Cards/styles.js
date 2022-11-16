import { alpha, makeStyles } from '@material-ui/core/styles';
import { PrintDisabledOutlined } from '@material-ui/icons';

export default makeStyles((theme) => ({
  
    card_hover: {
        '&:hover': {boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;',transform:'scale(1.01)' },
      },
  
}));