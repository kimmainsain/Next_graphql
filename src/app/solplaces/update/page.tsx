type ParamsProps = {
  params: { id: string };
};

const T = ({ params }: ParamsProps) => {
  return (
    <div>
      param : {params.id}
      <h1>Test Page</h1>
    </div>
  );
};

export default T;
