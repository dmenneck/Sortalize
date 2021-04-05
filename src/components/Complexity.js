import react from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const Complexity = ({data}) => {

    return (
        <TableContainer component={Paper}>
            <Table  aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="center">Best case</TableCell>
                    <TableCell align="center">Average Case</TableCell>
                    <TableCell align="center">Worst Case</TableCell>
                    <TableCell align="center">Space</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                        {data.map((row) => (
                            <TableCell align="center">{row}</TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Complexity;