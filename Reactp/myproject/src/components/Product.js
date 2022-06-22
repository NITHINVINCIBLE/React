// List rendering
export default function Product(){
    // const prices=[10,20,30,40];
    const products = [
        { id:1, name:"item1", cost:10},
        { id:2, name:"item2", cost:20},
        { id:3, name:"item3", cost:30},
    ];

    const prodlist = products.map((x)=>(
        <h2 key={x.id}>
            {x.name} : {x.cost}
        </h2>

    ))
    return <div>{prodlist}</div>;

    
}

// return (
    //     <div>
    //         {   
    //             prices.map((price) => (<h2>{price}</h2>))
    //         }
    //     </div>
    // )

// or 

// const temp=prices.map((price) => (<h2>{price}</h2>))
// return <div>{temp}</div>

// or

// rendering Array
// const temp = prices.map((price,index) => <h3 key={index}>{fruit}</h3>)
// return <div>{temp}</div>