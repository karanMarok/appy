const Questions = () => {

    let data = [
        {
            item: "First Question",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,"
        },
        {
            item: "Second Question",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,"
        },
        {
            item: "Third Question",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,"
        }
    ];

    return (
        <>
            <div className="questionBody">
                <div className="questionOne">
                    <div className="questionText">
                        <p className="questionTextOne">FAQ</p>
                        <p className="questionTextTwo">Frequently Asked Questions</p>
                    </div>
                </div>

                <div className="questionAccordion">
                    {data.map((value) => {
                        return (
                            <>
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                {value.item}
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">{value.text}</div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Questions;