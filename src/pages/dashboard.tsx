import Button from "@/components/button";

const Dashboard = () => {
  return (
    <>
      <header className="m-8 text-2xl font-extrabold">
        CALIDAD QUE INSPIRA
      </header>
      <div className="grid grid-cols-2 gap-4">
        <Button text="Crear" onClick={console.log} />
        <Button text="Consultar" onClick={console.log} secondary={true} />
      </div>
      <span className="m-8 mx-16 text-center">
        El contrato de arrendamiento automatizado más poderoso del mercado.
      </span>
    </>
  );
};

export default Dashboard;
