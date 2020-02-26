import red from '@material-ui/core/colors/red'
import pink from '@material-ui/core/colors/pink'
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'
import yellow from '@material-ui/core/colors/yellow'

const themes = [
  {
    id: 'default',
    color: blue[500]
  },
  {
    id: 'black',
    source: {
      palette: {
        primary: {
          main: '#1c1c1c'
        }
      }
    }
  },
  {
    id: 'blue',
    color: blue[500]
  },
  {
    id: 'red',
    color: red[500],
    source: {
      palette: {
        primary: red,
        secondary: pink,
        error: red
      }
    }
  },
  {
    id: 'green',
    color: green[500],
    source: {
      palette: {
        primary: green,
        secondary: red,
        error: red
      }
    }
  },
  {
    id: 'darkGreen',
    color: green[900],
    source: {
      palette: {
        primary: {
          main: green[900], 
        },
        secondary: 
        {
          main: yellow[500], 
        },
        error: red
      }
    }
  }
]

export default themes
