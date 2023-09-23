import { ListOfPosts } from "./ListOfPosts.jsx";

const page = async ({ params }) => {
  return (
    <section>
      <ListOfPosts />
    </section>
  );
};

export default page;
