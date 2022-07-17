import React from 'react';

const Hero_Section = () => {
    return (
        <section className='my-20'>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="rounded-lg shadow-2xl" />
                    <div>
                        <h2 className='text-3xl font-bold text-slate-700'>ABOUT COMPANY</h2>
                        <h2 className='text-4xl font-bold text-slate-300 my-4'>
                            Unique Digital Ideas <br />
                            for Successful Business
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt neque repellendus architecto mollitia adipisci at aliquid nihil quasi. Recusandae mollitia officia veritatis pariatur exercitationem atque saepe laboriosam sequi autem labore possimus, similique et vel quasi! Nesciunt, quas reprehenderit necessitatibus sint quis distinctio ipsam fuga obcaecati fugiat magni voluptas veniam. Nulla!</p>
                        <hr className='my-2' />
                        <button className='btn btn-slate-700 rounded-none my-7'>Get In Touch</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero_Section;