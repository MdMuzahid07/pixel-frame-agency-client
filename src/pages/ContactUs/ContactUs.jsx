import React from 'react';

const ContactUs = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault();

        console.log("button working!")
    }

    return (
        <section className='text-slate-400'>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 px-2 my-7 rounded-xl">
                <div className='bg-slate-900 p-7'>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore enim, aperiam fugiat ad reiciendis repudiandae quia beatae porro eaque quibusdam provident hic ab! Porro, labore eos voluptas deserunt repellat in reiciendis provident ad et dolores quisquam est, ducimus hic incidunt necessitatibus nam maiores eius dolore ab voluptatem! Beatae quo nesciunt veniam at a. Assumenda rerum laudantium non adipisci harum laboriosam praesentium? Eaque adipisci cupiditate est dolores qui. Error fugit delectus fuga. Tenetur nobis doloremque accusantium, facilis deleniti sit assumenda quidem, aut excepturi odio, debitis esse error! Vitae saepe pariatur quod sit rerum at hic blanditiis veniam enim nobis! Vel, incidunt.</h2>
                </div>
                <div className='bg-black p-5 border-4 border-slate-400'>
                    <form onSubmit={handleOnSubmit}>
                        <input type="text" placeholder="Your name" class="input w-full" />
                        <input type="email" placeholder="Your email" class="input w-full my-2" />
                        <input type="text" placeholder="Subject" class="input w-full" />
                        <textarea class="textarea w-full my-2" cols="30" rows="10" placeholder="Message"></textarea>
                        <input className='btn btn-outline text-white' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
            <hr />
            <div className="mapouter mt-20 border-4 border-slate-400">
                <div className="gmap_canvas">
                    <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                    </iframe>
                    <a href="https://fmovies-online.net"></a>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;