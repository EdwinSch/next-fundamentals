// NOTE (1): The type ('id' in this example) has to match whatever the [dynamic page] is called.
// NOTE (2): Access the route host/tours/[id] (eg: host/tours/123) to view the page route and render the id
// NOTE (3): From NEXT v15 the dynamic params need to be an ASYNC function

const DynamicPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  console.log(params);

  return (
    <div>
      <h1 className="text-4xl">ID : {id}</h1>
    </div>
  );
};
export default DynamicPage;
