import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const FeatureBlog = () => {
  const [topPosts, setTopPosts] = useState([]);
  console.log(topPosts);

  useEffect(() => {
    const fetchTopPosts = async () => {
      try {
        const response = await fetch(
          "https://travel-blog-server-side.vercel.app/top-posts"
        );
        const data = await response.json();
        setTopPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTopPosts();
  }, []);

  const columns = [
    { name: "Serial Number", selector: "serialNumber", sortable: true },
    { name: "Blog Title", selector: "title", sortable: true },
    { name: "Blog Owner", selector: "userEmail", sortable: true },
    {
      name: "Blog Owner Profile Picture",
      selector: "userPhoto",
      sortable: true,
      cell: (row) => (
        <img
          src={row.userPhoto}
          alt="Profile"
          className="rounded-full h-8 w-8"
        />
      ),
    },
  ];

  const tableData = topPosts.map((post, index) => ({
    serialNumber: index + 1,
    title: post.title,
    userEmail: post.userEmail,
    userPhoto: post.userPhoto,
  }));

  return (
    <div className=" bg-cyan-100 p-3 rounded">
      <h2 className="text-center text-3xl my-4 font-semibold">Top 10 Posts</h2>
      <DataTable
        className=" border-4 "
        title=""
        columns={columns}
        data={tableData}
      />
    </div>
  );
};

export default FeatureBlog;
