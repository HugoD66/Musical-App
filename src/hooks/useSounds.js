import * as Tone from 'tone'
import {useState, useEffect, useRef} from "react";

import kick from "assets/sounds/Kick.wav";
import tom from "assets/sounds/Tom1.wav";
import cymbal from "assets/sounds/Cymbal2.wav";
import gong from "assets/sounds/Gong-Medium.wav";
import drum from "assets/sounds/Loop6.wav";
import loop from "assets/sounds/Loop8.wav";

export default function useSounds() {
    const mySampler = useRef(null);
    //Active l'éclairage touche avec clavier
const[isKickPlayed, isKickPlayedChange] = useState(false);
const[isTomPlayed, isTomPlayedChange] = useState(false);
const[isCymbalPlayed, isCymbalPlayedChange] = useState(false);
const[isGongPlayed, isGongPlayedChange] = useState(false);
//Nouveaux
const[isDrumPlayed, isDrumPlayedChange] = useState(false);
const[isLoopPlayed, isLoopPlayedChange] = useState(false);


    useEffect(() => {
        const sampler = new Tone.Sampler({
            "C4": kick,
            "D#4": tom,
            "F#4": cymbal,
            "A4": gong,
            "B4" : drum,
            "C5" : loop,
        }).toDestination();

        Tone.loaded().then(() => {
            mySampler.current= sampler;
        })
    }, [])

    //Factorisation ButtonList
    function soundPlay(note) {
        mySampler.current.triggerAttackRelease([note], 4)
    }
    //Lier touche clavier
    function handleKeyDown( {key} ) {
        switch(key){
            case "a" :
                isKickPlayedChange(true);
                window.setTimeout(() => {
                    isKickPlayedChange(false);

                }, 300)
                soundPlay("C4");
                break;
            case "z" :
                isTomPlayedChange(true);
                window.setTimeout(() => {
                    isTomPlayedChange(false);

                }, 300)
                soundPlay("D#4");
                break;
            case "e" :
                isCymbalPlayedChange(true);
                window.setTimeout(() => {
                    isCymbalPlayedChange(false);

                }, 300)
                soundPlay("F#4");
                break;
            case "r" :
                isGongPlayedChange(true);
                window.setTimeout(() => {
                    isGongPlayedChange(false);

                }, 300)
                soundPlay("A4");
                break;
            case "w" :
                isDrumPlayedChange(true);
                window.setTimeout(() => {
                    isDrumPlayedChange(false);

                }, 300)
                soundPlay("B4");
                break;
            case "x" :
                isLoopPlayedChange(true);
                window.setTimeout(() => {
                    isLoopPlayedChange(false);

                }, 300)
                soundPlay("C5");
                break;
            default:
                break;
        }
    }

    useEffect (() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    })
    //Import de son
    function handleSampleChange(note, file) {
        let fileURL = URL.createObjectURL(file);
        let buffer = new Tone.Buffer(fileURL);
        mySampler.current.add(note, buffer, ()=>alert("Le sample a bien été changé."));
    }
    //Assignation des sons
    const buttonList = [
        { soundPlay: () => soundPlay("C4") ,
            isPlayed: isKickPlayed,
            id: "kick",
            handleSampleChange : (e)=>handleSampleChange("C4", e.target.files[0]),
        },
        { soundPlay: () => soundPlay("D#4") ,
            isPlayed: isTomPlayed,
            id: "tom",
            handleSampleChange : (e)=>handleSampleChange("D#4", e.target.files[0]),
        },
        { soundPlay: () => soundPlay("F#4") ,
            isPlayed: isCymbalPlayed,
            id: "cymbal",
            handleSampleChange : (e)=>handleSampleChange("F#4", e.target.files[0]),
        },
        { soundPlay: () => soundPlay("A4") ,
            isPlayed: isGongPlayed,
            id: "gong",
            handleSampleChange : (e)=>handleSampleChange("A4", e.target.files[0]),
        },
        { soundPlay: () => soundPlay("B4") ,
            isPlayed: isDrumPlayed,
            id: "drum",
            handleSampleChange : (e)=>handleSampleChange("B4", e.target.files[0]),
        },
        { soundPlay: () => soundPlay("C5") ,
            isPlayed: isLoopPlayed,
            id: "loop",
            handleSampleChange : (e)=>handleSampleChange("C5", e.target.files[0]),
        },
    ]
    return {buttonList};
}
