import TabuaAlta from "./TabuaAlta.js"
import TabuaBaixa from "./TabuaBaixa.js"
import useMare from "../../hooks/mare-hooks.js"

export default function Mare () {
    const { mareState } = useMare();
    
    return (
        <>
            <TabuaBaixa altura={mareState[0].height} hora={mareState[0].time}/>
            <TabuaAlta altura={mareState[1].height} hora={mareState[1].time}/>
            <TabuaBaixa altura={mareState[2].height} hora={mareState[2].time}/>
            <TabuaAlta altura={mareState[3].height} hora={mareState[3].time}/>
        </>
    )
}