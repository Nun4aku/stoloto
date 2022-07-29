import React, {useState} from 'react'

const Ticket = () => {

    const [firstField , setFirstField] = useState([]);
    const [secondField ,setSecondField] = useState([]);
    const [isTicketWon, setIsTicketWon] = useState(false)
    const [clickResalt, setClickResalt] = useState(false)

    let copyFirstField = Object.assign([], firstField);
    let copySecondField = Object.assign([], secondField);


    let data = {
        selectedNumber: {
            firstField: firstField,
            secondField: secondField
        },
        isTicketWon: isTicketWon
    };

    
    function firstFieldSubmit(e, i) {
        //e.preventDefault();
        if (firstField.includes(i)) {
            copyFirstField.splice(firstField.indexOf(i), 1);
            setFirstField(copyFirstField)
        } else {
        if (firstField.length < 8 ) {
            copyFirstField.push(i)
            setFirstField(copyFirstField)
        }
        }
    }

    function secondFieldSubmit(e, y) {
        //e.preventDefault();
        if (secondField.includes(y)) {
            copySecondField.splice(secondField.indexOf(y), 1);
            setSecondField(copySecondField)
        } else {
            if (secondField.length < 1 ) {
                copySecondField.push(y)
                setSecondField(copySecondField)
            }
        }
    }

    const winFirstField = [1, 2, 3, 4, 5, 6, 7 , 8];
    const winSecondField = [1];


    const resalt = () => {
        
        setClickResalt(true)

        const checkFirstField = firstField.map( (item) => {
            return winFirstField.includes(item)
        })

        const checkSecondField = secondField.map( (item) => {
            return winSecondField.includes(item)
        })

        console.log('checkFirstField', checkFirstField)
        console.log('checkSecondField', checkSecondField)

        
        const matchFirstField = checkFirstField.filter(function(value){return value});
        console.log(matchFirstField.length);

        const matchSecondField = checkSecondField.filter(function(value){return value});
        console.log(matchSecondField.length);
        
        if ( matchFirstField.length >= 4 || (matchFirstField.length >= 3 && matchSecondField.length === 1) ) {
            console.log('ПоБЕДА!!!');
            setIsTicketWon(true)
        } else {
            console.log('проиграли');
            setIsTicketWon(false)
        }
        
    }

    const randomFields = () => {
        let randomFirst = []
        while(randomFirst.length < 8){
            var randomnumber = Math.floor(Math.random()*19) + 1;
            if(randomFirst.indexOf(randomnumber) > -1) continue;
            randomFirst[randomFirst.length] = randomnumber;
        }
        setFirstField(randomFirst)

        let randomSecond = []
        while(randomSecond.length < 1){
            var randomnumber2 = Math.floor(Math.random()*2) + 1;
            if(randomSecond.indexOf(randomnumber2) > -1) continue;
            randomSecond[randomSecond.length] = randomnumber2;
        }
        setSecondField(randomSecond)


    }


    return (
        <div>
            {
                clickResalt ? (
                    <div className="ticket" style={{height: 382,}}>
                        <div className='title' >
                            <div className='fontTitle'>Билет 1</div>
                        </div>
                        <div className="oneLineText" style={{ alignItems: 'flex-start'}}>
                            <div style={{fontSize: 14}}>
                                {
                                    isTicketWon ? (
                                        'Ого, вы выиграли! Поздравляем!'
                                    ) : (
                                        'Не фартануло, печаль ...'
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="ticket">
                        <div className='title' >
                            <div className='fontTitle'>Билет 1</div>
                            <button
                                onClick={randomFields}
                            >
                                p
                            </button>
                        </div>
                        <div className="oneLineText">
                            <div className='fontOneLineText'>Полу 1</div>
                            <div style={{fontSize: 14}}>Отметьте 8 чисел</div>
                        </div>
                        
                        <div className="fields">
                            {
                                [...Array(19)].fill().map( (e,i) => {
                                return (
                                    <button
                                        key={'first' + i.toString()}
                                        className="oneFild"
                                        style={{backgroundColor: firstField.includes(i+1) ? '#FFD205' : '#FFF'}}
                                        onClick={ () => {firstFieldSubmit(e, i+1)} }
                                    >
                                        {i+1}
                                    </button>
                                )
                                })
                            }
                        </div>
                        
                        <div className="oneLineText">
                            <div className='fontOneLineText'>Поле 2</div>
                            <div style={{fontSize: 14}}>Отметьте 1 число</div>
                        </div>

                        <div className="fields">
                            {
                                [...Array(2)].fill().map( (e,y) => {
                                return (
                                    <button
                                        key={'second' + y.toString()}
                                        className="oneFild"
                                        style={{backgroundColor: secondField.includes(y+1) ? '#FFD205' : '#FFF'}}
                                        onClick={ () => {secondFieldSubmit(e, y+1)} }
                                    >
                                        {y+1}
                                    </button>
                                )
                                })
                            }
                        </div>
                        <button 
                            className="resalt"
                            onClick={ () => { resalt() }}
                            disabled={firstField.length !== 8 && secondField !== 1}
                        >
                            Показать результат
                        </button>
                    </div>
                )
            }
        </div>
    )
        

        
    
}

export default Ticket;