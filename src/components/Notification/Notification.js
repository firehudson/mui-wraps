import React, { Component } from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CardActions from '@material-ui/core/CardActions';
import { Button } from '../../stories/Button';


// const Notification = () => {
const data = [
  {
    title: 'Nature Around Us',
    description: 'We are going to learn different kinds of species in nature that live together to form amazing environment.We are going to learn different kinds of species in nature that live together to form amazing environment.'
  },
  {
    title: 'Nature Around Us',
    description: ' We are going to learn different kinds of species in nature that live together to form amazing environment.We are going to learn different kinds of species in nature that live together to form amazing environment.'
  },
  {
    title: 'Nature Around Us',
    description: ' We are going to learn different kinds of species in nature that live together to form amazing environment.We are going to learn different kinds of species in nature that live together to form amazing environment.'
  },
  {
    title: 'Nature Around Us',
    description: ' We are going to learn different kinds of species in nature that live together to form amazing environment.We are going to learn different kinds of species in nature that live together to form amazing environment.'
  },
  {
    title: 'Nature Around Us',
    description: ' We are going to learn different kinds of species in nature that live together to form amazing environment.We are going to learn different kinds of species in nature that live together to form amazing environment.'
  },
]


class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = { showing: true };
  }

  buttonHidden() {
    this.setState({
      showing: !this.state.showing
    })
  }

  render() {
    const { classes } = this.props;
    const { showing } = this.state;
    return (
      <>
        {data.map((datas, index) => (
          <div className={classes.root} key={index}>
            <Card className={classes.card}>
              <CardHeader
                action={
                  <IconButton onClick={() => this.buttonHidden()}>
                    {showing
                      ?
                      <CloseIcon />
                      :
                      null
                    }
                  </IconButton>
                }
                title={datas.title}
                className={classes.title} >
              </CardHeader>
              <CardContent >
                <Typography
                  className={classes.subtext}
                  variant='body2'
                  component='p'
                >
                  {datas.description}
                  {/* We are going to learn different kinds of species in nature that live together
                  to form amazing environment.We are going to learn different kinds of species
                  in nature that live together to form amazing environment. */}
            </Typography>
              </CardContent>
              <CardActions>
                <Button size='large' label="Yes" />
                <Button size='large' label="No" />
              </CardActions>
            </Card>
          </div>
        ))}
      </>
    )
  }
};

const styles = (theme) =>
  createStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
  },
  card: {
    width: '500px',
    backgroundColor: '#f5f5f5',
  },
  title: {
    textAlign: "left",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  subtext: {
    maxWidth: "470px",
    overflow: "hidden",
    position: "relative",
    // lineHeight: "1.2em",
    maxHeight: "60px",
    textAlign: "justify",
    marginRight: "-1em",
    paddingRight: "1em",
    marginBottom: "0.5em",
    textAlign: 'left',
    "&&:before": {
      content: '"..."',
      position: "absolute",
      right: 0,
      bottom: 0,
    },
  }
});

export default withStyles(styles)(Notification);