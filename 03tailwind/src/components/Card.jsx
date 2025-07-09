import React from 'react'

// function Card(props) { //here instead of props we can also use destructuring like ({username}) so we can directly use username instead of props.username
function Card({username="Hina", post="Not assigned yet",intro="No any introduction",myObj={},myArr=[]}) {
    // console.log(props)
    return (
        <div>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/32440654/pexels-photo-32440654/free-photo-of-charming-plant-filled-parisian-cafe-entrance.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-lg font-medium">
                                {intro}
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-sky-500 dark:text-sky-400">
                                {username}
                            </div>
                            <div className="text-slate-700 dark:text-slate-500">
                                {post}
                                
                            </div>
                        </figcaption>
                    </div>
            </figure>
        </div>
    )
}

export default Card