import elephant from  '../image/elephant.jpg'; 

const Hello = ()=>{

    return (
        <div className="d-flex justify-content-center">
            <div className='row'>
            <img src={ elephant } alt="elephant"></img>

            </div>
            <div className='row'>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae animi hic eligendi quasi tempora deserunt? Architecto repudiandae, vel illo odit corporis, maiores odio recusandae quis cum, laborum suscipit autem praesentium.</p>
            </div>
        </div>
    );
};


export default Hello;