import { useContext, useEffect } from "react";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../Sidebar";
import Widget from "../../../widget/Widget";
import LendsqrContext from "../../context/LendsqrContext";
import { ReactComponent as Menu } from "../../../assets/tableSvg/menu.svg";
import "../../../styles/User.css";

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

function User() {
  const { user, getUsers, setUser } = useContext(LendsqrContext);

  // console.log(Array.isArray(user));
  useEffect(() => {
    getUsers();
  }, []);

  // function createData(
  //   name: string,
  //   calories: number,
  //   fat: number,
  //   carbs: number,
  //   protein: number,
  // ) {
  //   return { name, calories, fat, carbs, protein };
  // }

  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  // ];
  return (
    <div className="user">
      <Navbar />
      <div className="user-wrapper">
        <Sidebar />
        <div className="user-component">
          <div className="wid-wrap">
            <Widget status="users" />
            <Widget status="activeUsers" />
            <Widget status="usersWithLoans" />
            <Widget status="usersWithSavings" />
          </div>
          <div className="table-container">
            <table className="table">
              <thead className="t-head">
                <tr className="t-row-head">
                  <th className="table-head">
                    Organization
                    <span >
                      <Menu  className="first"/>
                    </span>
                  </th>
                  <th className="table-head">
                    Username{" "}
                    <span >
                      <Menu  className="second"/>
                    </span>
                  </th>
                  <th className="table-head">
                    Email{" "}
                    <span>
                      <Menu   className="third"/>
                    </span>
                  </th>
                  <th className="table-head">
                    <span>Phone</span>
                    <span className='number'>Number</span>
                    <span>
                      <Menu  className="fourth"/>
                    </span>
                  </th>
                  <th className="table-head">
                    Date Joined{" "}
                    <span>
                      <Menu  className="fifth"/>
                    </span>
                  </th>
                  <th className="table-head">
                    Status{" "}
                    <span>
                      <Menu  className="sixth"/>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="t-body">
                {(user as unknown as any[])?.map((item) => (
                  <tr className="t-row-body" key={item.id}>
                    <td className="table-data">{item?.orgName}</td>
                    <td className="table-data">{item?.userName}</td>
                    <td className="table-data">{item?.email}</td>
                    <td className="table-data">{item?.phoneNumber}</td>
                    <td className="table-data">{item?.createdAt}</td>
                    <td className="table-data">{item?.userName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* <TableContainer className='table-container' component={Paper} sx={{ maxWidth: 600}}>
      <Table className='table' sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead className='table-head'>
          <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>Organization</TableCell>
            <TableCell align="justify">Username</TableCell>
            <TableCell align="justify">Email</TableCell>
            <TableCell align="justify">Phone Number</TableCell>
            <TableCell align="justify">Date Joined</TableCell>
            <TableCell align="justify">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='table-body'>
          {(user as unknown as any[])?.map((item) => (
            <TableRow
              className='table-row'
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                 {item.orgName}
              </TableCell>
              <TableCell className='table-cell' align="justify">{item.userName}</TableCell>
              <TableCell align="justify">{item.email}</TableCell>
              <TableCell align="justify">{item.phoneNumber}</TableCell>
              <TableCell align="justify">{item.createdAt}</TableCell>
              <TableCell align="justify">{item.userName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}
        </div>
      </div>
    </div>
  );
}

export default User;
