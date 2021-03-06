import { WithStyles, withStyles } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import CreateIcon from '@material-ui/icons/Create';
import 'highlight.js/styles/an-old-hope.css';
import * as React from 'react';
import Highlight from 'react-highlight';
import { HashLink } from 'react-router-hash-link';
import BasicFeatures from '../../components/BasicFeatures';
import GitHubIcon from '../../components/Github';
import SampleButtonsFeatures from '../../components/SampleButtonsFeatures';
import SampleFeatures from '../../components/SampleFeatures';

import { basicFeatures, buttonFeatures, simpleFeatures } from '../../utils/codeSnipetExamples';

const styles = {
    code: {
        fontSize: 15,
    },
    container: {
        margin: '0',
        padding: 30,
        width: '100%',
    },
    content: {
        marginTop: 10,
    },
    icon: {
        height: 24,
        viewBox: '0 0 24 24',
        width: 24,
    },
    link: {
        color: '#000',
        textDecoration: 'none',
    },
    paper: {
        padding: 20,
    },
    root: {
        display: 'block',
        flexShrink: '0',
        height: 'calc(100vh - 70px - 29px)',
        overflowY: 'auto',
        position: 'sticky',
        top: 50 + 29,
        wordBreak: 'break-all',
    },
};

const bar: any = {
    textAlign: 'right',
};

interface IState {
    openBasic: boolean;
    openSampleFeatures: boolean;
    openSample: boolean;
    openGridList: boolean;
    showCode: boolean;
    value: string;
}

export default withStyles(styles)(
    class extends React.Component<WithStyles<keyof typeof styles>, IState> {
        public state = {
            openBasic: false,
            openGridDialog: false,
            openGridList: false,
            openSample: false,
            openSampleFeatures: false,
            showCode: false,
            value: 'one',
        };
        public handleClickBasic = () => {
            this.setState({ openBasic: !this.state.openBasic });
        };
        public handleClickSample = () => {
            this.setState({ openSample: !this.state.openSample });
        };
        public handleClickSampleFeatures = () => {
            this.setState({ openSampleFeatures: !this.state.openSampleFeatures });
        };
        public handleClickGrid = () => {
            this.setState({ openGridList: !this.state.openGridList });
        };
        public handleClickGridDialog = () => {
            this.setState({ openGridDialog: !this.state.openGridDialog });
        };

        public render() {
            const { classes } = this.props;
            return (
                <div>
                    <Grid container={true} className={classes.container}>
                        <Grid item={true} xs={10} className={classes.paper}>
                            <Paper className={classes.paper} id="simple-grid">
                                <Typography variant="h4">Samples</Typography>
                                <Divider />
                                <br />
                                <Grid item={true} xs={12} className={classes.paper}>
                                    <a id="simple-grid" />
                                    <Typography variant="h5" gutterBottom={true}>
                                        Very basic grid sample
                                    </Typography>
                                    <Typography variant="h6">
                                        Basic grid with sorting, paging and filtering functionalities. Showing how
                                        different data types are displayed. To implement it you must declare each column
                                        and their own funcionalities.
                                    </Typography>
                                    <Grid item={true} xs={12}>
                                        <div style={bar}>
                                            <Tooltip title="Tubular GitHub Repo">
                                                <IconButton
                                                    component="a"
                                                    href="https://github.com/unosquare/tubular-react"
                                                    target="_blank"
                                                    color="inherit"
                                                >
                                                    <GitHubIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title={this.state.openBasic ? 'Hide Code' : 'View Code'}>
                                                <IconButton onClick={this.handleClickBasic}>
                                                    <CodeIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Edit in CodeSandbox">
                                                <IconButton
                                                    component="a"
                                                    href="https://codesandbox.io/s/lp594wqr1q"
                                                    target="_blank"
                                                    color="inherit"
                                                >
                                                    <CreateIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </div>
                                        <Collapse in={this.state.openBasic} timeout="auto">
                                            <Paper>
                                                <Highlight language="javascript" className={classes.code}>
                                                    {basicFeatures}
                                                </Highlight>
                                            </Paper>
                                        </Collapse>
                                        <BasicFeatures />
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Grid item={true} xs={12} className={classes.paper}>
                                    <a id="full-grid" />
                                    <Typography variant="h5" gutterBottom={true}>
                                        Full grid features
                                    </Typography>
                                    <Typography variant="h6">
                                        The grid can be extended to include features like sorting, filtering, free-text
                                        searches, paging and change the number of rows per page. Also, you can easily
                                        print or export the current view or entire dataset to CSV using client-side
                                        only.
                                    </Typography>
                                    <Grid item={true} xs={12}>
                                        <div style={bar}>
                                            <Tooltip title="Tubular GitHub Repo">
                                                <IconButton
                                                    component="a"
                                                    href="https://github.com/unosquare/tubular-react"
                                                    target="_blank"
                                                    color="inherit"
                                                >
                                                    <GitHubIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title={this.state.openSample ? 'Hide Code' : 'View Code'}>
                                                <IconButton onClick={this.handleClickSample}>
                                                    <CodeIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Edit in CodeSandbox">
                                                <IconButton
                                                    component="a"
                                                    href="https://codesandbox.io/s/434rlkr2y9"
                                                    target="_blank"
                                                    color="inherit"
                                                >
                                                    <CreateIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </div>
                                        <Collapse in={this.state.openSample} timeout="auto">
                                            <Paper>
                                                <Highlight language="javascript" className={classes.code}>
                                                    {simpleFeatures}
                                                </Highlight>
                                            </Paper>
                                        </Collapse>
                                        <SampleFeatures />
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Grid item={true} xs={12} className={classes.paper}>
                                    <a id="func-btns" />
                                    <Typography variant="h5" gutterBottom={true}>
                                        How to include functionality buttons
                                    </Typography>
                                    <Typography variant="h6">
                                        You can add functionalities to the DataGrid including extra buttons that can
                                        perform an action according to your requirements. You just need to include the
                                        IconButton Component from @material-ui and define the icon or button that you
                                        need between DataGrid tags and specify the action to perform.
                                    </Typography>
                                    <Grid item={true} xs={12}>
                                        <div style={bar}>
                                            <Tooltip title="Tubular GitHub Repo">
                                                <IconButton
                                                    component="a"
                                                    href="https://github.com/unosquare/tubular-react"
                                                    target="_blank"
                                                    color="inherit"
                                                >
                                                    <GitHubIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title={this.state.openSampleFeatures ? 'Hide Code' : 'View Code'}>
                                                <IconButton onClick={this.handleClickSampleFeatures}>
                                                    <CodeIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Edit in CodeSandbox">
                                                <IconButton
                                                    component="a"
                                                    href="https://codesandbox.io/s/1ox0q89rl7"
                                                    target="_blank"
                                                    color="inherit"
                                                >
                                                    <CreateIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </div>
                                        <Collapse in={this.state.openSampleFeatures} timeout="auto">
                                            <Paper>
                                                <Highlight language="javascript" className={classes.code}>
                                                    {buttonFeatures}
                                                </Highlight>
                                            </Paper>
                                        </Collapse>
                                        <SampleButtonsFeatures />
                                    </Grid>
                                </Grid>
                                <Divider />
                            </Paper>
                        </Grid>
                        <Grid item={true} xs={2} className={classes.paper}>
                            <List
                                component="nav"
                                subheader={<ListSubheader component="div">Content</ListSubheader>}
                                className={classes.root}
                            >
                                <ListItem>
                                    <HashLink className={classes.link} to="/tubular-react/Sample#simple-grid">
                                        <ListItemText primary="Basic Grid" />
                                    </HashLink>
                                </ListItem>
                                <ListItem>
                                    <HashLink className={classes.link} to="/tubular-react/Sample#full-grid">
                                        <ListItemText primary="Features" />
                                    </HashLink>
                                </ListItem>
                                <ListItem>
                                    <HashLink className={classes.link} to="/tubular-react/Sample#func-btns">
                                        <ListItemText primary="Toolbar Buttons" />
                                    </HashLink>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </div>
            );
        }
    },
);
