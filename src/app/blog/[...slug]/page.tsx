
const CatchAllRoutes = async ({params}:{params : Promise<{slug :string[]}>}) => {
    console.log(await params)
    return (
        <div>
            <h1>Catch All Routes </h1>
        </div>
    );
};

export default CatchAllRoutes;