type ParamsProps = {
  params: { id: string };
};

const SolplaceUpdatePage = ({ params }: ParamsProps) => {
  return (
    <div>
      param : {params.id}
      <h1>Test Page</h1>
    </div>
  );
};

export default SolplaceUpdatePage;
