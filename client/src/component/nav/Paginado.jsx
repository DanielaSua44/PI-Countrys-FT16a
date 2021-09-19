import React from "react";
import styles from './paginacion.module.css'

const Paginado = ({ countryPerPage, countries, paginado }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(countries / countryPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.conteiner}>
      <div className={styles.pagination}>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number} className={styles.pageItem}>
            <button
              onClick={(e) => {
                e.preventDefault();
                paginado(number);
              }}
              className={styles.pageLink}
            >
              {number}{" "}
            </button>
          </li>
          ))}
      </div>
    </div>
  );
};

export default Paginado;