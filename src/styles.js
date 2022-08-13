export default theme => ({
    container: {
        alignItems: 'center',
        display: 'flex'
    },
    root: {
        '& .MuiPaper-root': {
            borderRadius: 0,
            padding: theme.spacing(2)
        },
        '& button': {
            marginLeft: theme.spacing(2)
        },
        '& p.MuiTypography-root': {
            fontStyle: 'italic'
        }
    },
    select: {
        marginLeft: 'auto',
        width: theme.spacing(20)
    }
})