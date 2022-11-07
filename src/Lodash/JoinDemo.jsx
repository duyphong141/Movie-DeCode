import React from 'react'
import _ from 'lodash'

export default function JoinDemo() {

    let arr = ['Khải', 'Nam', 'Minh'];

    //es6 
    const result = arr.join('-');
    const name = arr.find(item => item === "Nam")

    //lodash
    const resultLodash = _.join(arr, '*');

    const nameLodash = _.find(arr, item => item === 'Nam')

    const first = _.first(arr);



    const mang1 = [1,2];
    const mang2 = mang1;

    console.log([1,2] === [1,2])

    return (
        <div>
            {result}
            <br />
            {resultLodash}
            <br />
            {name}
            <br />
            {nameLodash}
            <br />
            {first}
        </div>
    )
}
