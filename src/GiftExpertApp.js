import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GiftGrid from './GiftGrid';

const GiftExpertApp = () => {

const [categories, setCategories] = useState(['One Punch']);


    return (
        <>
            <h2>Gift App</h2>
            <AddCategory
                setCategories={setCategories}
            />
            <hr/>

            {/* <button
                onClick= {handleAdd}
            > Agregar </button> */}

            <ol>
                {
                    categories.map( category => (
                        <GiftGrid
                            key={ category }
                            category={  category }
                        />
                    ))
                }
            </ol>


        </>
    )
}

export default GiftExpertApp
