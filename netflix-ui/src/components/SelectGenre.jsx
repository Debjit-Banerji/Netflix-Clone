import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchDataByGenre } from "../store/index";
export default function SelectGenre({ genres, type }) {
  const dispatch = useDispatch();
  return (
    <Select
      className="flex"
      onChange={(e) => {
        dispatch(
          fetchDataByGenre({
            genres,
            genre: e.target.value,
            type,
          })
        );
      }}
    >
      {genres.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </Select>
  );
}

const Select = styled.select`
  margin-left: 3rem;
  cursor: pointer;
  font-size: 1.4rem;
  background-color: grey;
  border-radius: 0.5rem;
  color: white;
`;