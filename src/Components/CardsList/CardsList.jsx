import './CardsList.css';

const CardsList = () => {
    return (
        <>
            <div className="cards-list">
                <div className="cards-list__container">
                    <span className="cards-list__label">HOW WE WORK</span>
                    <div className="cards-list__head">
                        <h2 className="cards-list__title">I will show you how our team works</h2>
                        <p>Bring to the table win-win market strategies to ensure perfect articles. </p>
                    </div>
                    <div className="cards-list__items">
                        <div className="cards-list_item card">
                            <span>01</span>
                            <h3 className="card__title">Brainstorming</h3>
                            <p className="card__text">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated</p>
                            <a href="#" className="card__link">Learn More</a>
                        </div>

                        <div className="cards-list_item card">
                            <span>02</span>
                            <h3 className="card__title">Analysing</h3>
                            <p className="card__text">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line solely on the bottom line.</p>
                            <a href="#" className="card__link">Learn More</a>
                        </div>

                        <div className="cards-list_item card">
                            <span>03</span>
                            <h3 className="card__title">News Publishing</h3>
                            <p className="card__text">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                            <a href="#" className="card__link">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default CardsList;