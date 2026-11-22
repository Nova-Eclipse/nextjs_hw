'use client';
import{useState, useEffect} from 'react';

export default function Store(){
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(data => {
            setProducts(data.slice(0,20));
            setLoading(false);
        })
        .catch(error=>{
            console.error('Error fectching products. Error is: ', error);
            setLoading(false);
        });

    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );


    return(
        <main>
            <h1>My Storepage</h1>

            <input type='text' placeholder="Search products..."
            value = {search} onChange={(e)=>setSearch(e.target.value)}/>

            {loading ? (
                <p>Loading products...</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Images</th>
                            <th>Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredProducts.map(product => (
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>
                                    <img src={product.image} alt={product.title}
                                    width="75"
                                    height="75"
                                    />
                                </td>
                                <td>${product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
            }
        </main>
    );
}