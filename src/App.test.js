import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import filter from "./utils/FilterUtils";

test('работу фильтра по категориям и имени', () => {


    let array = [
        {name: "Mixer", category: "Electronics"},
        {name: "Kettle", category: "Electronics"},
        {name: "Iron", category: "Electronics"},
        {name: "Plate", category: "Dishes"},
    ];
    let result = filter(array, "Electronics", "" );
    expect(result.length).toEqual(3);

  result = filter(array, "Electronics", "r" );
  expect(result.length).toEqual(2)
});

