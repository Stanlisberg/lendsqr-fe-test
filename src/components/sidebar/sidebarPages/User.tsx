import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../Sidebar";
import Widget from "../../../widget/Widget";
import LendsqrContext from "../../context/LendsqrContext";
import ReactPaginate from "react-paginate";
import { ReactComponent as Menu } from "../../../assets/tableSvg/menu.svg";
import { ReactComponent as Dotted } from "../../../assets/tableSvg/dotted.svg";
import { ReactComponent as Greater } from "../../../assets/tableSvg/greater.svg";
import { ReactComponent as Less } from "../../../assets/tableSvg/less.svg";
import "../../../styles/User.css";

function User() {
  const { user, getUsers, setUser } = useContext(LendsqrContext);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems((user as unknown as never[])?.slice(itemOffset, endOffset));
    setPageCount(
      Math.ceil((user as unknown as never[])?.length / itemsPerPage)
    );
  }, [itemOffset, itemsPerPage, user]);

  const handlePageClick = (event: any) => {
    const newOffset =
      (event.selected * itemsPerPage) % (user as unknown as never[])?.length;
    setItemOffset(newOffset);
  };

  // console.log(Array.isArray(user));
  console.log(user);
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="user">
      <Navbar />
      <div className="user-wrapper">
        <Sidebar />
        <div className="user-component">
          <div className="user-text">Users</div>
          <div className="wid-wrap">
            <div className="wid-cont">
              <Widget status="users" />
              <Widget status="activeUsers" />
              <Widget status="usersWithLoans" />
              <Widget status="usersWithSavings" />
            </div>
          </div>
          <div className="table-container">
            <div className="table-wrapper">
              <table className="table">
                {user && (
                  <thead className="t-head">
                    <tr className="t-row-head">
                      <th className="table-head">
                        <td>Organization</td>
                        <td>
                          <Menu className="menu" />
                        </td>
                      </th>
                      <th className="table-head">
                        <td>Username</td>
                        <td>
                          <Menu className="menu" />
                        </td>
                      </th>
                      <th className="table-head">
                        <td>Email</td>
                        <td>
                          <Menu className="menu" />
                        </td>
                      </th>
                      <th className="table-head">
                        <td>Phone</td>
                        <td className="number">Number</td>
                        <td>
                          <Menu className="menu" />
                        </td>
                      </th>
                      <th className="table-head">
                        <td>Date</td>
                        <td className="number">Joined</td>
                        <td>
                          <Menu className="menu" />
                        </td>
                      </th>
                      <th className="table-head">
                        <td>Status</td>
                        <td>
                          <Menu className="menu" />
                        </td>
                      </th>
                    </tr>
                  </thead>
                )}
                <tbody className="t-body">
                  {(currentItems as unknown as any[])?.map((item) => (
                    <tr className="t-row-body" key={item.id}>
                      <td className="table-data">
                        {item?.orgName.slice(0, 15)}
                      </td>
                      <td className="table-data user-trans">
                        <Link to={`/user/${item.id}`} className="link">
                          {item?.profile.firstName}
                        </Link>
                      </td>
                      <td className="table-data">{item?.email}</td>
                      <td className="table-data">
                        {item?.phoneNumber.slice(0, 15)}
                      </td>
                      <td className="table-data">
                        {item?.createdAt.slice(0, 10)}
                      </td>
                      <td className="table-data">
                        {item?.userName.charAt(0) === ("W" || "H" || "A")
                          ? "active"
                          : ""}
                        {item?.userName.charAt(0) === "J" ? "pending" : ""}
                      </td>
                      <td>
                        <Dotted className="dot" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel={<Greater />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel={<Less />}
            // renderOnZeroPageCount= { }
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page"
            nextLinkClassName="page"
            activeLinkClassName="active"
          />
        </div>
      </div>
    </div>
  );
}

export default User;
