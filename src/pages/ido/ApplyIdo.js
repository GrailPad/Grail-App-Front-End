import React, { useState, useRef } from 'react';

import './applyIdo.scss';

const ApplyIdo = ({ open }) => {
    const [titleType, setTitleType] = useState("");
    const [fund, setFund] = useState("");
    const [dox, setDox] = useState("");
    const [purpose, setPurpose] = useState("");
    const [fileName, setFileName] = useState('');

    const hiddenFileInput = useRef(null);

    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };

    return (
        <div className='applyIdo' style={{ marginLeft: open ? '17rem' : '5vw' }}>
            <div className='header'>
                <h2>Apply for IDO</h2>
            </div>

            <div className='main'>
                <div className='applyLabel'>
                    <span>Project Name</span>
                </div>
                <div className='applyInput'>
                    <input placeholder='Project Name' className='inp' name={'grail'} type={'text'} />
                </div>


                <div className='applyLabel'>
                    <span>What is Your Project About (Briefly):</span>
                </div>
                <div className='applyInput'>
                    <input placeholder='Project Brief' className='inp' name={'grail'} type={'text'} />
                </div>

                <div className='seperator' />

                <div className='applyLabel'>
                    <span>Project Status</span>
                </div>
                <p>
                    <input className={"radio"} type="radio" value={"1"} name={"name"} checked={titleType === "1"} onChange={(e) => setTitleType(e.target.value)} />
                    <span>Just an initial idea</span>
                </p>
                <p>
                    <input className={"radio"} type="radio" value={"2"} name={"name"} checked={titleType === "2"} onChange={(e) => setTitleType(e.target.value)} />
                    <span>Idea with White Paper</span>
                </p>
                <p>
                    <input className={"radio"} type="radio" value={"3"} name={"name"} checked={titleType === "3"} onChange={(e) => setTitleType(e.target.value)} />
                    <span>In early development</span>
                </p>
                <p>
                    <input className={"radio"} type="radio" value={"4"} name={"name"} checked={titleType === "4"} onChange={(e) => setTitleType(e.target.value)} />
                    <span>In late stage of development</span>
                </p>
                <p>
                    <input className={"radio"} type="radio" value={"5"} name={"name"} checked={titleType === "5"} onChange={(e) => setTitleType(e.target.value)} />
                    <span>Ready to launch</span>
                </p>
                <p>
                    <input className={"radio"} type="radio" value={"6"} name={"name"} checked={titleType === "6"} onChange={(e) => setTitleType(e.target.value)} />
                    <span>Already launched</span>
                </p>

                <div className='seperator' />

                <div className='applyLabel'>
                    <span>Have you already raised funds?</span>
                </div>
                <p>
                    <input className={"radio"} type="radio" value={"1"} name={"fund"} checked={fund === "1"} onChange={(e) => setFund(e.target.value)} />
                    <span>Yes</span>
                </p>
                <p>
                    <input className={"radio"} type="radio" value={"2"} name={"fund"} checked={fund === "2"} onChange={(e) => setFund(e.target.value)} />
                    <span>No</span>
                </p>

                <div className='seperator' />

                <div className='applyLabel'>
                    <span>If yes, how much?</span>
                </div>
                <div className='applyInput'>
                    <input placeholder='How much?' className='inp' name={'grail'} type={'text'} />
                </div>

                <div className='seperator' />

                <div className='applyLabel'>
                    <span>Is your team Doxxed?</span>
                </div>
                <p>
                    <input className={"radio"} type="radio" value={"1"} name={"dox"} checked={dox === "1"} onChange={(e) => setDox(e.target.value)} />
                    <span>Fully Doxxed</span>
                </p>
                <p>
                    <input className={"radio"} type="radio" value={"2"} name={"dox"} checked={dox === "2"} onChange={(e) => setDox(e.target.value)} />
                    <span>Annonymous</span>
                </p>
                <p>
                    <input className={"radio"} type="radio" value={"3"} name={"dox"} checked={dox === "3"} onChange={(e) => setDox(e.target.value)} />
                    <span>Mixed</span>
                </p>

                <div className='seperator' />

                <div className='applyLabel'>
                    <span>What is your project designed for?</span>
                </div>
                <p>
                    <input className={"radio"} type="radio" value={"1"} name={"purpose"} checked={purpose === "1"} onChange={(e) => setPurpose(e.target.value)} />
                    <span>Binance Smart Chain</span>
                </p>
                <p>
                    <input className={"radio"} type="radio" value={"2"} name={"purpose"} checked={purpose === "2"} onChange={(e) => setPurpose(e.target.value)} />
                    <span>Polygon</span>
                </p>
                <p>
                    <input className={"radio"} type="radio" value={"3"} name={"purpose"} checked={purpose === "3"} onChange={(e) => setPurpose(e.target.value)} />
                    <span>Ethereum</span>
                </p>
                <p>
                    <input className={"radio"} type="radio" value={"4"} name={"purpose"} checked={purpose === "4"} onChange={(e) => setPurpose(e.target.value)} />
                    <span>Avalanche</span>
                </p>
                <p>
                    <input className={"radio"} type="radio" value={"5"} name={"purpose"} checked={purpose === "5"} onChange={(e) => setPurpose(e.target.value)} />
                    <span>Solana</span>
                </p>
                <p style={{ marginBottom: 0 }}>
                    <input className={"radio"} type="radio" value={"6"} name={"purpose"} checked={purpose === "6"} onChange={(e) => setPurpose(e.target.value)} />
                    <span>Other</span>
                </p>
                <div className='applyInput' style={{ width: '20%', marginTop: 0 }}>
                    <input placeholder='Your Answer' className='inp' name={'grail'} type={'text'} />
                </div>
                <div className='applyLabel'>
                    <span>Are you migrating from somewhere else?</span>
                </div>
                <div className='applyInput'>
                    <input placeholder='Your Answer' className='inp' name={'grail'} type={'text'} />
                </div>

                <div className='seperator' />

                <div className='applyLabel'>
                    <span>How much are you planning on raising on the IDO?</span>
                </div>
                <div className='applyInput'>
                    <input placeholder='Your Answer' className='inp' name={'grail'} type={'text'} />
                </div>

                <div className='seperator' />

                <div className='applyLabel'>
                    <span>Can you describe simply the token use case?</span>
                </div>
                <div className='applyInput'>
                    <input placeholder='Your Answer' className='inp' name={'grail'} type={'text'} />
                </div>

                <div className='seperator' />

                <div className='applyLabel'>
                    <span>Project Links</span>
                </div>
                <div className='applyInput'>
                    <input placeholder='Website URL' className='inp' name={'grail'} type={'text'} />
                </div>
                <div className='applyInput'>
                    <input placeholder='Twitter Link' className='inp' name={'grail'} type={'text'} />
                </div>
                <div className='applyInput'>
                    <input placeholder='Telegram Link' className='inp' name={'grail'} type={'text'} />
                </div>
                <div className='applyInput'>
                    <input placeholder='Medium URL' className='inp' name={'grail'} type={'text'} />
                </div>
                <div className='applyInput'>
                    <input placeholder='Discord URL' className='inp' name={'grail'} type={'text'} />
                </div>
                <div className='applyInput'>
                    <input placeholder='Github URL' className='inp' name={'grail'} type={'text'} />
                </div>

                <div className='seperator' />

                <div className='applyLabel'>
                    <span>Project's Whitepaper</span>
                </div>
                <div className={fileName !== '' ? 'applyUpload active' : 'applyUpload'} onClick={handleClick} style={{ cursor: 'pointer' }}>
                    <span className='span'>Upload</span>
                    <input onChange={(e) => setFileName(e.target.files[0].name)} name={'grail'} type={'file'} ref={hiddenFileInput} style={{ display: 'none' }} />
                    <div className='fileNameContain'>
                        <span className='fileName hide'>a</span>
                        <span className='fileName'>{fileName}</span>
                    </div>
                    <span className='browse'>Browse</span>
                </div>

                <div className='seperator' />

                <div className='submitBtn'>
                    Submit
                </div>
            </div>
        </div>
    )
}

export default ApplyIdo;