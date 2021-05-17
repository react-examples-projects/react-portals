import css from "./styles/planets.module.scss";
import { getPlanets } from "../helpers/requests";
import { usePaginatedQuery, useQuery } from "react-query";
import { useState } from "react";

export default function Planets() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery(["planets", page], getPlanets, {
    keepPreviousData: true,
  });
  const nextPage = () => setPage(() => page + 1);
  const previusPage = () => setPage(() => (page > 1 ? page - 1 : page));

  return (
    <div className={css.container}>
      <h4>Planetas</h4>
      {isLoading ? (
        <span className={css.loader}>Cargando...</span>
      ) : (
        <ul>
          {data.map((planet) => {
            return <li>{planet.name}</li>;
          })}
        </ul>
      )}

      <button onClick={nextPage}>Siguiente</button>
      <button onClick={previusPage}>Anterior</button>
    </div>
  );
}
