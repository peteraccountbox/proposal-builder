import { Draggable, DraggableProvided, Droppable } from "react-beautiful-dnd";
import StaticContents from "../json/StaticContents";
import { ColumnTypes, ContentType, ProposalBuilderContext, ProposalBuilderContextPayload, RowTypes } from "../models/GeneralModels";
import React, { Dispatch, useContext } from "react";

interface contentProps {
    setShowTabPane: Dispatch<boolean>
}
function Content(props: contentProps) {
    const { setShowTabPane } = props
    const contextData = useContext<ProposalBuilderContextPayload>(ProposalBuilderContext);
    // function getSVGIcons(contentName: string) {
    //     switch (contentName) {
    //         case "divider":
    //             return <span>
    //                 <svg className="eb-icon-svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >

    //                     <g>
    //                         <g>
    //                             <path className="st0" d="M47.4,26.3H2.8c-0.7,0-1.3-0.6-1.3-1.3c0-0.7,0.6-1.3,1.3-1.3h44.6c0.7,0,1.3,0.6,1.3,1.3    C48.7,25.7,48.1,26.3,47.4,26.3z" />
    //                         </g>
    //                         <g>
    //                             <path className="st1" d="M49,38.4v6.3c0,0.4-0.3,0.7-0.7,0.7H1.7c-0.4,0-0.7-0.3-0.7-0.7v-6.3c0-0.4,0.3-0.7,0.7-0.7h46.6    C48.7,37.7,49,38,49,38.4z" />
    //                         </g>
    //                         <g>
    //                             <path className="st1" d="M49,5.3v6.3c0,0.4-0.3,0.7-0.7,0.7H1.7C1.3,12.3,1,12,1,11.6V5.3c0-0.4,0.3-0.7,0.7-0.7h46.6    C48.7,4.6,49,4.9,49,5.3z" />
    //                         </g>
    //                     </g>
    //                 </svg>
    //             </span>
    //         case "text":
    //             return <span>
    //                 <svg className="eb-icon-svg" version="1.1" id="bold" x="0px" y="0px" viewBox="0 0 50 50" >
    //                     <path d="M39.5,1h-29C7.5,1,5,3.5,5,6.5v37c0,3,2.5,5.5,5.5,5.5h29c3,0,5.5-2.5,5.5-5.5v-37C45,3.5,42.5,1,39.5,1z M11,13.5  c0-0.8,0.7-1.5,1.5-1.5h11c0.8,0,1.5,0.7,1.5,1.5v2c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5V15h-2.5v8c0.8,0,1.5,0.7,1.5,1.5  c0,0.8-0.7,1.5-1.5,1.5h-3c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5v-8H14v0.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5  V13.5z M37.5,38h-25c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5h25c0.8,0,1.5,0.7,1.5,1.5C39,37.3,38.3,38,37.5,38z M37.5,32h-25  c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5h25c0.8,0,1.5,0.7,1.5,1.5C39,31.3,38.3,32,37.5,32z M37.5,26h-7  c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5h7c0.8,0,1.5,0.7,1.5,1.5C39,25.3,38.3,26,37.5,26z M37.5,20.5h-7  c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5h7c0.8,0,1.5,0.7,1.5,1.5C39,19.8,38.3,20.5,37.5,20.5z M37.5,15h-7  c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h7c0.8,0,1.5,0.7,1.5,1.5S38.3,15,37.5,15z" />
    //                 </svg>
    //             </span>
    //         case "rss":
    //             return <span>
    //                 <svg className="eb-icon-svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50">

    //                     <g>
    //                         <g>
    //                             <path className="st0" d="M41.2,1H8.8C4.5,1,1,4.5,1,8.8v32.3C1,45.5,4.5,49,8.8,49h32.3c4.3,0,7.8-3.5,7.8-7.8V8.8    C49,4.5,45.5,1,41.2,1z M12.5,42.2c-2.6,0-4.7-2.1-4.7-4.7s2.1-4.7,4.7-4.7s4.7,2.1,4.7,4.7C17.2,40.1,15.1,42.2,12.5,42.2z     M25,40.7c-1.7,0-3.1-1.4-3.1-3.1c0-5.2-4.2-9.4-9.4-9.4c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c8.6,0,15.7,7,15.7,15.7    C28.1,39.2,26.7,40.7,25,40.7z M37.5,40.7c-1.7,0-3.1-1.4-3.1-3.1c0-12.1-9.8-21.9-21.9-21.9c-1.7,0-3.1-1.4-3.1-3.1    s1.4-3.1,3.1-3.1C28,9.3,40.7,22,40.7,37.5C40.7,39.2,39.2,40.7,37.5,40.7z" />
    //                         </g>
    //                     </g>
    //                 </svg>
    //             </span>
    //         case "signature":
    //             return <span>
    //                 <svg className="eb-icon-svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50">

    //                     <g>
    //                         <g>
    //                             <path className="st0" d="M36.1,19.6l7.2,2.7l-6,16.4c-0.6,1.5-3.6,6.4-5.7,7.3l-0.5,1.4c-0.1,0.4-0.5,0.6-0.8,0.6    c-0.1,0-0.2,0-0.3-0.1c-0.5-0.2-0.7-0.7-0.5-1.1l0.5-1.3c-1.1-2.1-0.3-8.2,0.2-9.5L36.1,19.6z M46.6,2.3c-2-0.7-4.3,0.8-5,2.6    l-4.4,11.9l7.2,2.7l4.4-11.9C49.4,6,48.6,3,46.6,2.3z M33.5,19c0.2,0.1,0.4,0.1,0.6,0.1c0.7,0,1.4-0.4,1.7-1.2l4.6-12.4    c0.3-0.9-0.1-1.9-1-2.3c-0.9-0.3-1.9,0.1-2.3,1l-4.6,12.4C32.1,17.6,32.6,18.6,33.5,19z M26.1,42.2c-0.5-0.4-1.1-1-2-1.4    c-0.8-0.4-1.6-0.4-2.1-0.4c-0.1,0-0.1,0-0.2,0c-0.4-1-1.1-1.6-2.1-1.8c-1.4-0.3-2.5,0.4-3.3,0.9c0.1-0.4,0.2-0.9,0.3-1.2    c0.3-1.1,0.5-2.2,0.3-3.3c-0.2-0.8-0.9-1.5-1.7-1.5c-2.2-0.1-4,1.1-5.5,2.1C8,36.7,7,37.4,5.9,37c-1.3-0.5-1.4-3.9-0.8-7    c0.6-2.8,1.6-8,4.2-10.4c0.9-0.8,2.2-1.7,3.2-1.2c1.2,0.5,2.3,2.5,2.5,5c0.1,1,1,1.8,2,1.7c1-0.1,1.8-1,1.7-2    c-0.4-4-2.2-7.1-4.9-8.1c-1.6-0.6-4.1-0.8-7.1,1.9c-3.3,3-4.5,8-5.4,12.4C1,31.5-0.1,38.9,4.6,40.5c2.9,1,5.2-0.6,7.1-1.8    c0.3-0.2,0.7-0.5,1-0.7c-0.3,1.4-0.5,2.8,0.3,4c1.2,1.8,3,2,5.1,0.6c0.1-0.1,0.2-0.1,0.3-0.2c0.2,0.4,0.6,0.9,1.2,1.2    c0.8,0.4,1.6,0.4,2.1,0.4c0.2,0,0.6,0,0.7,0.1c0.4,0.2,0.6,0.3,1,0.7c0.3,0.3,0.6,0.6,1,0.9c0.3,0.3,0.7,0.4,1.1,0.4    c0.6,0,1.1-0.3,1.5-0.8c0.6-0.8,0.5-2-0.4-2.6C26.5,42.6,26.3,42.4,26.1,42.2z" />
    //                         </g>
    //                     </g>
    //                 </svg>
    //             </span>
    //         case "html":
    //             return <span>
    //                 <svg className="eb-icon-svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >

    //                     <g>
    //                         <path className="st0" d="M30.3,10c-0.7-0.2-1.4,0.2-1.6,0.8l-8.5,27.6C20,39.1,20.4,39.8,21,40c0.1,0,0.2,0.1,0.4,0.1   c0.5,0,1-0.3,1.2-0.9l8.5-27.6C31.3,10.9,30.9,10.2,30.3,10z" />
    //                         <path className="st0" d="M13.4,14.6c0.5-0.5,0.5-1.3,0-1.8c-0.5-0.5-1.3-0.5-1.8,0l-9.6,9.6C1.4,23.1,1,24,1,25c0,1,0.4,1.9,1.1,2.6   l9.6,9.6c0.2,0.2,0.6,0.4,0.9,0.4c0.3,0,0.6-0.1,0.9-0.4c0.5-0.5,0.5-1.3,0-1.8l-9.6-9.6c-0.2-0.2-0.3-0.5-0.3-0.8   c0-0.3,0.1-0.6,0.3-0.8L13.4,14.6z" />
    //                         <path className="st0" d="M47.9,22.4l-9.6-9.6c-0.5-0.5-1.3-0.5-1.8,0c-0.5,0.5-0.5,1.3,0,1.8l9.6,9.6c0.2,0.2,0.3,0.5,0.3,0.8   c0,0.3-0.1,0.6-0.3,0.8l-9.6,9.6c-0.5,0.5-0.5,1.3,0,1.8c0.2,0.2,0.6,0.4,0.9,0.4c0.3,0,0.6-0.1,0.9-0.4l9.6-9.6   c0.7-0.7,1.1-1.6,1.1-2.6C49,24,48.6,23.1,47.9,22.4z" />
    //                     </g>
    //                 </svg>
    //             </span>
    //         case "link-button":
    //             return <span>
    //                 <svg className="eb-icon-svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >

    //                     <g>
    //                         <path className="st0" d="M33.5,13L44,23.4c5.1-3.1,7.3-10.3,2-16.9C44.9,5.1,42.5,4,40.8,4H11.4C3.1,4-2.9,13.8,4.1,22.5   c1.2,1.5,3.1,2.4,5.1,2.4h17.2V16c0-1.7,1-3.2,2.6-3.9C30.9,11.3,32.7,12.1,33.5,13z" />
    //                         <path className="st0" d="M31.5,15c-0.5-0.5-1.3-0.6-1.8-0.1c-0.4,0.3-0.6,0.7-0.6,1.2l0,24c0,0.6,0.3,1.1,0.9,1.3   c0.5,0.2,1.1,0.1,1.5-0.3l5.6-5.6l4,9.6c0.3,0.7,1.1,1.1,1.8,0.8c0.7-0.3,1.1-1.1,0.8-1.8l-4-9.6h7.8c0.4,0,0.9-0.2,1.2-0.6   c0.4-0.6,0.4-1.4-0.1-1.8L31.5,15z" />
    //                     </g>
    //                 </svg>
    //             </span>
    //         case "image":
    //             return <span>
    //                 <svg className="eb-icon-svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50">

    //                     <g>
    //                         <path className="st0" d="M43.8,5.5H6.2C3.3,5.5,1,7.9,1,10.7v28.5c0,2.9,2.3,5.2,5.2,5.2h37.6c2.9,0,5.2-2.3,5.2-5.2V10.7   C49,7.9,46.7,5.5,43.8,5.5z M6.2,8.1h37.6c1.5,0,2.7,1.2,2.7,2.7v20.9l-8.8-11.9c-1.4-3.1-6.1-3.1-7.5,0l-6.8,15.3l-6.1-9   c-1.8-2.6-5.5-2.6-7.3,0l-6.5,9.5V10.7C3.5,9.3,4.7,8.1,6.2,8.1z" />
    //                         <path className="st0" d="M13.1,18.9c2.1,0,3.8-1.7,3.8-3.8c0-2.1-1.7-3.8-3.8-3.8c-2.1,0-3.8,1.7-3.8,3.8C9.3,17.2,11,18.9,13.1,18.9z" />
    //                     </g>
    //                 </svg>
    //             </span>
    //         case "video":
    //             return <span>
    //                 <svg className="eb-icon-svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >

    //                     <path className="st0" d="M8.1,2.5l9.4,9.4H1.2C1.9,7.8,4.4,4.3,8.1,2.5z M20.8,1h-6.7c-0.4,0-0.8,0-1.2,0l10.9,10.9h8L20.8,1z M35.9,1  H27l10.9,10.9h10.9C47.7,5.6,42.3,1,35.9,1z M21.7,37.3l10.9-6c1.1-0.6,1.4-1.9,0.9-3c-0.2-0.4-0.5-0.7-0.9-0.9l-10.9-6  c-1.1-0.6-2.4-0.2-3,0.9c-0.2,0.3-0.3,0.7-0.3,1.1v12c0,1.2,1,2.2,2.2,2.2C21,37.5,21.4,37.5,21.7,37.3L21.7,37.3z M49,16.3v19.6  C49,43.1,43.1,49,35.9,49H14.1C6.9,49,1,43.1,1,35.9V16.3L49,16.3z" />
    //                 </svg>
    //             </span>
    //         case "space":
    //             return <span>
    //                 <svg className="eb-icon-svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >

    //                     <g>
    //                         <path className="st0" d="M5.8,20.3v7.1h38.3v-7.1c0-1.3,1.1-2.4,2.4-2.4h0c1.3,0,2.4,1.1,2.4,2.4v9.4c0,0.3-0.1,0.7-0.2,0.9   c-0.4,0.9-1.3,1.5-2.2,1.5H3.4c-0.3,0-0.6,0-0.8-0.1c-1-0.4-1.6-1.3-1.6-2.2v-9.5c0-1.3,1.1-2.4,2.4-2.4h0   C4.8,17.9,5.8,18.9,5.8,20.3z" />
    //                     </g>
    //                 </svg>
    //             </span>
    //         case "social":
    //             return <span>
    //                 <svg className="eb-icon-svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >

    //                     <g id="Layer_16">
    //                         <circle className="st0" cx="25" cy="25" r="6.6" />
    //                         <path className="st0" d="M42.5,27.4c-0.6,0.3-1.1,0.6-1.5,1.1l-6.9-2.3c-0.2,1.2-0.5,2.3-1.1,3.4l6.9,2.3c0.2,2.5,2.4,4.4,4.9,4.2   c2.5-0.2,4.4-2.4,4.2-4.9c-0.2-2.5-2.4-4.4-4.9-4.2C43.6,27.1,43,27.2,42.5,27.4L42.5,27.4z" />
    //                         <path className="st0" d="M7.5,13.3c0.1,0,0.1-0.1,0.2-0.1l9.1,7.4c0.6-1.1,1.3-2,2.2-2.8l-9.1-7.4C10.6,8,9.2,5.5,6.8,4.8   S1.9,5.5,1.2,7.9s0.7,4.9,3.1,5.6C5.4,13.9,6.5,13.8,7.5,13.3z" />
    //                         <path className="st0" d="M31.2,37.9L29.6,33c-1,0.6-2.2,1-3.4,1.1l1.6,4.9c-0.1,0.1-0.2,0.1-0.3,0.2c-2.3,2-2.6,5.5-0.6,7.8   c2,2.3,5.5,2.6,7.8,0.6c2.3-2,2.6-5.5,0.6-7.8C34.3,38.6,32.8,37.9,31.2,37.9L31.2,37.9z" />
    //                         <path className="st0" d="M32.7,19.8l8.5-8.5c2.7,1.3,6,0.2,7.3-2.5c1.3-2.7,0.2-6-2.5-7.3S40,1.3,38.7,4c-0.7,1.5-0.7,3.2,0,4.7   l-8.5,8.5C31.2,18,32,18.8,32.7,19.8L32.7,19.8z" />
    //                         <path className="st0" d="M17.3,30.1L8,39.5c-2.5-1.1-5.4,0-6.6,2.5c-1.1,2.5,0,5.4,2.5,6.6s5.4,0,6.6-2.5c0.6-1.3,0.6-2.8,0-4l9.4-9.4   C18.9,32,18,31.1,17.3,30.1z" />
    //                     </g>
    //                 </svg>
    //             </span>
    //         case "forms":
    //             return <span>
    //                 <svg className="eb-icon-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50">
    //                     <g>
    //                         <path d="M41.2,7.1C41,7,40.9,7,40.7,7H12.1c-2.4,0-4.4,2-4.4,4.4v23.2c0,0.2,0.1,0.4,0.2,0.6H6c-0.5,0-1,0.4-1,1v2.3   C5,40.9,7,43,9.5,43h1c0,0,0,0,0,0h19.2c0,0,0,0,0.1,0c0,0,0,0,0,0h0.7c3.3,0,6.1-2.7,6.1-6.1V13c0-0.1,0-0.1,0-0.2H44   c0.5,0,1-0.4,1-1C45,9.5,43.4,7.6,41.2,7.1z M6.9,38.3V37h18.5v1.4c0,1,0.3,2,0.9,2.7H9.5C8.1,41.1,6.9,39.9,6.9,38.3z M34.7,13   v23.9c0,2.3-1.9,4.2-4.2,4.2h-0.7c-1.4,0-2.6-1.2-2.6-2.7V36c0-0.5-0.4-1-1-1c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0H9.5   c0.1-0.2,0.2-0.3,0.2-0.6V11.4c0-1.4,1.1-2.5,2.5-2.5h24.2C36.2,9,36.1,9.2,36,9.3C35.2,10.3,34.7,11.6,34.7,13z M37.4,10.9   c0.1-0.2,0.2-0.4,0.3-0.6c0.7-0.8,1.6-1.3,2.7-1.4c1.2,0.1,2.2,0.9,2.6,2H37.4z" />
    //                         <path d="M29,15.3H16.5c-0.5,0-1,0.4-1,1c0,0.5,0.4,1,1,1H29c0.5,0,1-0.4,1-1C29.9,15.7,29.5,15.3,29,15.3z" />
    //                         <path d="M29,21.6H16.5c-0.5,0-1,0.4-1,1c0,0.5,0.4,1,1,1H29c0.5,0,1-0.4,1-1C29.9,22,29.5,21.6,29,21.6z" />
    //                         <path d="M29,27.9H16.5c-0.5,0-1,0.4-1,1c0,0.5,0.4,1,1,1H29c0.5,0,1-0.4,1-1C29.9,28.3,29.5,27.9,29,27.9z" />
    //                     </g>
    //                 </svg>
    //             </span>
    //         default:
    //             break;
    //     }
    // }

    function getSVGIcons(contentName: string) {
        switch (contentName) {
            case "product_list":
                return <span className="justify-content-center d-flex">
                    <svg className="h-24 w-24"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 50 50"
                        xmlSpace="preserve"
                    >
                        {" "}
                        <path
                            className="st0"
                            d="M904.2,610.4h-8.7h-13.2h-8.7c-2.6,0-4.7,2.1-4.7,4.7v30.6c0,2.6,2.1,4.7,4.7,4.7h30.6c2.6,0,4.7-2.1,4.7-4.7 v-30.6C908.9,612.5,906.7,610.4,904.2,610.4z M894.5,612.3V626l-5.1-3.7c-0.2-0.1-0.4-0.2-0.6-0.2c-0.2,0-0.4,0.1-0.6,0.2l-5.1,3.7 v-13.7H894.5z M907,645.7c0,1.5-1.3,2.8-2.8,2.8h-30.6c-1.5,0-2.8-1.3-2.8-2.8v-30.6c0-1.5,1.3-2.8,2.8-2.8h7.8v15.6 c0,0.4,0.2,0.7,0.5,0.8c0.3,0.2,0.7,0.1,1-0.1l6-4.4l6,4.4c0.2,0.1,0.4,0.2,0.6,0.2c0.1,0,0.3,0,0.4-0.1c0.3-0.2,0.5-0.5,0.5-0.8 v-15.6h7.8c1.5,0,2.8,1.3,2.8,2.8V645.7z"
                        />{" "}
                        <path
                            className="st0"
                            d="M40.5,4.8h-8.7H18.6H9.9c-2.6,0-4.7,2.1-4.7,4.7v30.6c0,2.6,2.1,4.7,4.7,4.7h30.6c2.6,0,4.7-2.1,4.7-4.7V9.5 C45.2,6.9,43.1,4.8,40.5,4.8z M30.8,6.7v13.7l-5.1-3.7c-0.2-0.1-0.4-0.2-0.6-0.2s-0.4,0.1-0.6,0.2l-5.1,3.7V6.7H30.8z M43.3,40.1 c0,1.5-1.3,2.8-2.8,2.8H9.9c-1.5,0-2.8-1.3-2.8-2.8V9.5c0-1.5,1.3-2.8,2.8-2.8h7.8v15.6c0,0.4,0.2,0.7,0.5,0.8 c0.3,0.2,0.7,0.1,1-0.1l6-4.4l6,4.4c0.2,0.1,0.4,0.2,0.6,0.2c0.1,0,0.3,0,0.4-0.1c0.3-0.2,0.5-0.5,0.5-0.8V6.7h7.8 c1.5,0,2.8,1.3,2.8,2.8V40.1z"
                        />{" "}
                    </svg>
                </span>
            case "divider":
                return <span className="justify-content-center d-flex">
                    <svg className="h-24 w-24" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >
                        <g>
                            <g>
                                <path d="M43.8,26.2H6.2C5.5,26.2,5,25.7,5,25s0.5-1.2,1.2-1.2h37.6c0.6,0,1.2,0.5,1.2,1.2S44.5,26.2,43.8,26.2z" />
                            </g>
                            <g>
                                <path d="M29.7,20.9h-9.4c-0.5,0-0.9-0.3-1.1-0.7c-0.2-0.4-0.1-0.9,0.3-1.3l4.7-4.7c0.5-0.5,1.2-0.5,1.7,0l4.7,4.7    c0.3,0.3,0.4,0.8,0.3,1.3C30.6,20.6,30.2,20.9,29.7,20.9z M23.1,18.6h3.8L25,16.7L23.1,18.6z" />
                            </g>
                            <g>
                                <path d="M25,36.1c-0.3,0-0.6-0.1-0.8-0.3l-4.7-4.7c-0.3-0.3-0.4-0.8-0.3-1.3c0.2-0.4,0.6-0.7,1.1-0.7h9.4c0.5,0,0.9,0.3,1.1,0.7    c0.2,0.4,0.1,0.9-0.3,1.3l-4.7,4.7C25.6,36,25.3,36.1,25,36.1z M23.1,31.4l1.9,1.9l1.9-1.9H23.1z" />
                            </g>
                        </g>
                    </svg>
                </span>
            case "text":
                return <span className="justify-content-center d-flex">
                    <svg className="h-24 w-24" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >
                        <g>
                            <path d="M43.6,6.9H6.4C5.6,6.9,5,7.7,5,8.4V14c0,0.9,0.6,1.4,1.4,1.4c0.9,0,1.4-0.8,1.4-1.4V9.7h15.7v31.9c0,0.9,0.8,1.4,1.4,1.4   s1.4-0.6,1.4-1.4V9.7h15.7V14c0,0.9,0.8,1.4,1.4,1.4c0.7,0,1.3-0.6,1.3-1.3V8.4C45,7.5,44.2,6.9,43.6,6.9z" />
                        </g>
                    </svg>                </span>
            case "rss":
                return <span className="justify-content-center d-flex">
                    <svg className="h-24 w-24" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >
                        <g>
                            <path d="M7.7,4.9c-0.7,0-1.4,0.5-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c19.1,0,34.7,15.6,34.7,34.7c0,0.7,0.5,1.4,1.4,1.4   c0.7,0,1.4-0.5,1.4-1.4C45.1,21.7,28.3,4.9,7.7,4.9z" />
                            <path d="M7.7,15.7c-0.7,0-1.4,0.5-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c13.1,0,23.8,10.7,23.8,23.8c0,0.7,0.5,1.4,1.4,1.4   c0.8,0,1.4-0.6,1.4-1.4C34.3,27.6,22.4,15.7,7.7,15.7z" />
                            <path d="M7.7,25.3c-0.7,0-1.4,0.5-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c7.9,0,14.3,6.4,14.3,14.3c0,0.7,0.5,1.4,1.4,1.4   c0.8,0,1.4-0.6,1.4-1.4C24.7,32.8,17.2,25.3,7.7,25.3z" />
                            <path d="M10.5,33.9c-3.1,0-5.6,2.5-5.6,5.6s2.5,5.6,5.6,5.6s5.6-2.5,5.6-5.6S13.6,33.9,10.5,33.9z M13.5,39.5c0,1.7-1.3,3-3,3   c-1.7,0-3-1.3-3-3c0-1.7,1.3-3,3-3C12.2,36.5,13.5,37.8,13.5,39.5z" />
                        </g>
                    </svg>
                </span>
            case "signature":
                return <span className="justify-content-center d-flex">
                    <svg className="h-24 w-24" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >
                        <g>
                            <path d="M25.2,31.6c-0.1-0.1-0.6-0.2-1-0.1c-0.5,0.1-0.9,0.4-1.1,0.6c-0.5,0.8-1.8,1.2-2.9,0.7c-0.4-0.2-1.2-0.6-2-0.4   c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1,0c-0.2-0.4-0.5-1-1.1-1.3c-0.6-0.3-1.2-0.4-1.9-0.2c-0.5,0.1-0.9,0.3-1.3,0.6l-0.2,0.2   c0.2-0.7,0.1-1.4,0-1.8c-0.2-0.9-0.7-1.5-1.4-2c-1.6-0.8-3.4,0.1-4.2,1.5c-0.7,1.1-0.7,2.5-0.3,3.8c-0.2,0.1-0.5,0-0.7,0   C5.9,33.4,5.1,34,5,34.9c-0.1,0.5,0.3,1.1,0.9,1.2H6c0.3,0,0.7-0.2,0.9-0.5c0.9,0.1,1.8-0.1,2.5-0.6c0.3-0.1,0.4-0.3,0.5-0.5   c0.1,0.3,0.4,0.5,0.6,0.6c1.2,0.4,2.7,0,3.5-0.9c0.1-0.1,0.2-0.2,0.4-0.5c0.1-0.2,0.3-0.4,0.4-0.4l0,0c0.1-0.1,0.3-0.2,0.3-0.2h0.4   c0.1,0.1,0.2,0.3,0.4,0.7l0.1,0.1c0.1,0.3,0.4,1.1,1.1,1.2h0.2c0.4,0,0.7-0.2,0.9-0.4c0.1-0.1,0.2-0.2,0.2-0.2   c0.1,0,0.3,0.1,0.6,0.2l0.2,0.1c1.7,0.8,4,0.3,5.3-1.2c0.4,0.1,0.8-0.1,1-0.5c0.2-0.2,0.2-0.5,0.2-0.8C25.7,32,25.5,31.8,25.2,31.6   z M9.9,33.6c0-0.1-0.1-0.1-0.1-0.2c-0.6-0.7-0.8-1.9-0.3-2.7c0.2-0.3,0.5-0.6,0.8-0.7c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.3,0.1   c0.1,0,0.3,0.2,0.3,0.5l0,0c0.1,0.2,0,0.4,0,0.6c0,0.1,0,0.2,0,0.3c-0.2,0.6-0.5,1.1-1.1,1.8C10,33.4,10,33.5,9.9,33.6z" />
                            <path d="M45,12.2c-0.1-0.8-0.5-1.4-1.1-2c-1.4-1-3.2-0.7-4.1,0.6L27.9,26.7c-0.1,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1-0.1,0.1l-1.4,5.1   c-0.1,0.5,0,0.9,0.5,1.1c0.2,0.1,0.4,0.2,0.6,0.2c0.2,0,0.3,0,0.6-0.1l4.4-2.8c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1-0.1,0.2-0.1   l11.8-15.9C44.9,13.7,45.1,12.9,45,12.2z M42.8,12.5c0,0.3,0,0.4-0.2,0.6L31,28.8L29.1,30l0.6-2.1l11.7-15.7   c0.1-0.2,0.3-0.3,0.5-0.3c0.2,0,0.4,0,0.6,0.1C42.7,12.2,42.8,12.3,42.8,12.5z" />
                            <path d="M18.1,38.1h-0.2c-0.6,0-1,0.5-1,1.1c0,0.6,0.6,1.1,1.1,1.1c0.5,0,1.1-0.4,1.1-1.1C19.1,38.6,18.7,38.1,18.1,38.1z" />
                            <path d="M12.2,38.1H12c-0.5,0-1.1,0.4-1.1,1.1c0,0.5,0.4,1.1,1.1,1.1h0.2c0.5,0,1.1-0.4,1.1-1.1C13.3,38.6,12.8,38.1,12.2,38.1z" />
                            <path d="M6.3,38.1L6.3,38.1c-0.6,0-1.2,0.4-1.2,1.1c0,0.5,0.4,1.1,1.1,1.1h0.2c0.5,0,1.1-0.4,1.1-1.1C7.4,38.5,7,38.1,6.3,38.1z" />
                            <path d="M24,38.1h-0.2c-0.5,0-1.1,0.4-1.1,1.1c0,0.5,0.4,1.1,1.1,1.1H24c0.5,0,1.1-0.4,1.1-1.1C25,38.6,24.5,38.1,24,38.1z" />
                            <path d="M35.6,38.1h-0.2c-0.6,0-1,0.5-1,1.1c0,0.6,0.6,1.1,1.1,1.1c0.5,0,1.1-0.4,1.1-1.1C36.7,38.6,36.2,38.1,35.6,38.1z" />
                            <path d="M29.8,38.1h-0.2c-0.6,0-1,0.5-1,1.1c0,0.6,0.6,1.1,1.1,1.1c0.5,0,1.1-0.4,1.1-1.1C30.8,38.6,30.4,38.1,29.8,38.1z" />
                        </g>
                    </svg>
                </span>
            case "html":
                return <span className="justify-content-center d-flex">
                    <svg className="h-24 w-24" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >
                        <g>
                            <path d="M28.5,12.2c-0.6-0.2-1.3,0.2-1.4,0.8l-5.9,23.3C21,37,21.3,37.6,22,37.8c0.1,0,0.2,0,0.3,0c0.5,0,1-0.4,1.1-0.9l5.9-23.3   C29.5,13,29.1,12.4,28.5,12.2z" />
                            <path d="M15.9,14.6c-0.5-0.5-1.2-0.5-1.7,0l-8.9,8.9c-0.5,0.5-0.5,1.2,0,1.7l8.9,8.9c0.2,0.2,0.5,0.3,0.8,0.3   c0.3,0,0.6-0.1,0.8-0.3c0.5-0.5,0.5-1.2,0-1.7l-8.1-8.1l8.1-8.1C16.4,15.8,16.4,15.1,15.9,14.6z" />
                            <path d="M44.7,23.5l-8.9-8.9c-0.5-0.5-1.2-0.5-1.7,0c-0.5,0.5-0.5,1.2,0,1.7l8.1,8.1l-8.1,8.1c-0.5,0.5-0.5,1.2,0,1.7   c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,0.8-0.3l8.9-8.9C45.1,24.7,45.1,24,44.7,23.5z" />
                        </g>
                    </svg>
                </span>
            case "link-button":
                return <span className="justify-content-center d-flex">
                    <svg className="h-24 w-24" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >
                        <path d="M39.3,29.7c3.5-1.8,5.7-5.4,5.7-9.4c0-5.8-4.7-10.5-10.5-10.5h-19C9.7,9.8,5,14.5,5,20.3s4.7,10.5,10.5,10.5h11.7L24,38.3  c-0.2,0.6-0.1,1.2,0.4,1.6c0.5,0.4,1.2,0.4,1.7,0.1l7.4-5l7.4,5c0.2,0.2,0.5,0.2,0.8,0.2s0.6-0.1,0.9-0.3c0.5-0.4,0.6-1.1,0.4-1.6  L39.3,29.7z M15.5,28c-4.3,0-7.7-3.5-7.7-7.7s3.5-7.7,7.7-7.7h19c4.3,0,7.7,3.5,7.7,7.7c0,2.9-1.6,5.5-4.1,6.8l-3.4-7.9  c-0.4-1-2.1-1-2.6,0L28.4,28H15.5z M34.3,32.1c-0.2-0.2-0.5-0.2-0.8-0.2s-0.6,0.1-0.8,0.2L28.5,35l5-11.7l5,11.7L34.3,32.1z" />
                    </svg>
                </span>
            case "image":
                return <span className="justify-content-center d-flex">
                    <svg className="h-24 w-24" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >
                        <g>
                            <path d="M38.2,4.6H11.8c-4,0-7.2,3.2-7.2,7.2v26.4c0,4,3.2,7.2,7.2,7.2h26.4c4,0,7.2-3.2,7.2-7.2V11.8C45.4,7.8,42.2,4.6,38.2,4.6z    M32.7,16c-0.7,0-1.5,0.3-2,0.8L19.1,27.5c-0.1,0.1-0.2,0.1-0.2,0.1c0,0-0.1-0.1-0.2-0.2l-4.2-5.6c-0.5-0.8-1.4-1.2-2.5-1.2   c-0.9,0-1.8,0.5-2.4,1.4l-2.3,3.8V11.8c0-2.5,2-4.5,4.5-4.5h26.4c2.5,0,4.5,2,4.5,4.5v16.6l-7.6-11.1c-0.4-0.7-1.2-1.1-2.1-1.3   C32.9,16,32.8,16,32.7,16z M7.3,31l4.6-7.5c0.1-0.1,0.1-0.1,0.2-0.1c0.1,0,0.2,0,0.3,0.1l4.2,5.6c0.4,0.6,1.1,1,2.1,1.2   c0.7,0.1,1.6-0.2,2.3-0.8l11.6-10.7c0.1-0.1,0.2-0.1,0.2-0.1c0,0,0.1,0.1,0.2,0.1L42.6,33l0.1,0.1v5.1c0,2.5-2,4.5-4.5,4.5H11.8   c-2.5,0-4.5-2-4.5-4.5V31z" />
                            <path d="M16.4,9.3c-2.6,0-4.8,2.2-4.8,4.8s2.2,4.8,4.8,4.8s4.8-2.2,4.8-4.8S19,9.3,16.4,9.3z M16.4,16.3c-1.2,0-2.1-0.9-2.1-2.1   s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S17.6,16.3,16.4,16.3z" />
                        </g>
                    </svg>
                </span>
            case "video":
                return <span className="justify-content-center d-flex">
                    <svg className="h-24 w-24" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >

                        <g>
                            <path d="M34.7,4.7H15.3C9.4,4.7,4.7,9.4,4.7,15.3v19.4c0,5.9,4.8,10.6,10.6,10.6h19.4c5.9,0,10.6-4.8,10.6-10.6V15.3   C45.3,9.4,40.6,4.7,34.7,4.7z M42.8,15.3v0.6H35l4.7-6.8C41.7,10.6,42.8,12.9,42.8,15.3z M15.3,7.2h0.5l-6.1,8.7H7.2v-0.6   C7.2,10.8,10.8,7.2,15.3,7.2z M12.8,15.9L19,7.2h8l-6.1,8.7H12.8z M24,16l6.1-8.7l4.7,0c0.1,0,0.3,0,0.4,0c0.8,0,1.6,0.2,2.4,0.5   L31.9,16H24z M34.7,42.8H15.3c-4.5,0-8.1-3.6-8.1-8.1V18.4h35.6v16.3C42.8,39.2,39.2,42.8,34.7,42.8z" />
                            <path d="M31.4,28.7L20,22.3c-0.4-0.3-1-0.3-1.4,0C18.2,22.6,18,23,18,23.5v12.8c0,0.5,0.2,0.9,0.7,1.2l0,0   c0.3,0.1,0.4,0.1,0.6,0.1c0.2,0,0.4,0,0.7-0.1l11.4-6.4c0.4-0.3,0.6-0.7,0.6-1.2C32,29.4,31.8,29,31.4,28.7z M28,29.9L20.6,34v-8.3   L28,29.9z" />
                        </g>
                    </svg>
                </span>
            case "space":
                return <span className="justify-content-center d-flex">
                    <svg className="h-24 w-24" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >
                        <path d="M43.7,17.1c-0.8,0-1.3,0.7-1.3,1.3v6.2c0,3.1-2.5,5.6-5.6,5.6H13.3c-3.1,0-5.6-2.5-5.6-5.6v-6.2c0-0.8-0.6-1.3-1.3-1.3  c-0.8,0-1.3,0.7-1.3,1.3v6.2c0,4.5,3.7,8.2,8.2,8.2h23.5c4.5,0,8.2-3.7,8.3-8.2v-6.2C45,17.7,44.4,17.1,43.7,17.1z" />
                    </svg>
                </span>
            case "social":
                return <span className="justify-content-center d-flex">
                    <svg className="h-24 w-24" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" >
                        <path d="M33.5,18c3.6,0,6.5-2.9,6.5-6.5C40.1,7.9,37.1,5,33.5,5C29.9,5,27,7.9,27,11.5c0,0.7,0.1,1.4,0.3,2.1l-2.7,1.6  c-1.5-1.4-3.6-2.3-5.9-2.3c-4.8,0-8.7,3.9-8.7,8.7s3.9,8.7,8.7,8.7c1.2,0,2.4-0.3,3.5-0.7l4.3,6.4c-0.7,0.9-1,2.1-1,3.3  c0,3.2,2.6,5.8,5.8,5.8c3.2,0,5.8-2.6,5.8-5.8s-2.6-5.8-5.8-5.8c-0.9,0-1.8,0.2-2.6,0.6L24.6,28c1.7-1.6,2.8-3.9,2.8-6.4  c0-1.5-0.4-2.9-1.1-4.2l2.4-1.4C30,17.2,31.7,18,33.5,18z M34.4,39.2c0,1.7-1.3,3-3,3c-1.7,0-3-1.3-3-3s1.3-3,3-3  C33,36.2,34.4,37.5,34.4,39.2z M18.8,27.5c-3.2,0-5.9-2.6-5.9-5.9c0-3.2,2.6-5.9,5.9-5.9c3.2,0,5.9,2.6,5.9,5.9  C24.7,24.8,22.1,27.5,18.8,27.5z M33.5,7.8c2.1,0,3.7,1.7,3.7,3.7c0,2.1-1.7,3.7-3.7,3.7c-2.1,0-3.7-1.7-3.7-3.7S31.5,7.8,33.5,7.8z  " />
                    </svg>
                </span>
            case "forms":
                return <span className="justify-content-center d-flex">
                    <svg className="h-24 w-24" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50">
                        <g>
                            <path d="M41.2,7.1C41,7,40.9,7,40.7,7H12.1c-2.4,0-4.4,2-4.4,4.4v23.2c0,0.2,0.1,0.4,0.2,0.6H6c-0.5,0-1,0.4-1,1v2.3   C5,40.9,7,43,9.5,43h1c0,0,0,0,0,0h19.2c0,0,0,0,0.1,0c0,0,0,0,0,0h0.7c3.3,0,6.1-2.7,6.1-6.1V13c0-0.1,0-0.1,0-0.2H44   c0.5,0,1-0.4,1-1C45,9.5,43.4,7.6,41.2,7.1z M6.9,38.3V37h18.5v1.4c0,1,0.3,2,0.9,2.7H9.5C8.1,41.1,6.9,39.9,6.9,38.3z M34.7,13   v23.9c0,2.3-1.9,4.2-4.2,4.2h-0.7c-1.4,0-2.6-1.2-2.6-2.7V36c0-0.5-0.4-1-1-1c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0H9.5   c0.1-0.2,0.2-0.3,0.2-0.6V11.4c0-1.4,1.1-2.5,2.5-2.5h24.2C36.2,9,36.1,9.2,36,9.3C35.2,10.3,34.7,11.6,34.7,13z M37.4,10.9   c0.1-0.2,0.2-0.4,0.3-0.6c0.7-0.8,1.6-1.3,2.7-1.4c1.2,0.1,2.2,0.9,2.6,2H37.4z" />
                            <path d="M29,15.3H16.5c-0.5,0-1,0.4-1,1c0,0.5,0.4,1,1,1H29c0.5,0,1-0.4,1-1C29.9,15.7,29.5,15.3,29,15.3z" />
                            <path d="M29,21.6H16.5c-0.5,0-1,0.4-1,1c0,0.5,0.4,1,1,1H29c0.5,0,1-0.4,1-1C29.9,22,29.5,21.6,29,21.6z" />
                            <path d="M29,27.9H16.5c-0.5,0-1,0.4-1,1c0,0.5,0.4,1,1,1H29c0.5,0,1-0.4,1-1C29.9,28.3,29.5,27.9,29,27.9z" />
                        </g>
                    </svg>
                </span>
            default:
                break;
        }
    }


    const getRenderItem = (clone: any) => (provided: DraggableProvided, snapshot: any, rubric: any) => {
        const cloneCard = clone[rubric.source.index];
        return (
            <div className="builder-card">
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    // style={provided.draggableProps.style}
                    className={snapshot.isDragging ? "content-dragging" : ""}
                >
                    {/* <div className="builder-card-content-list lp-tab-content-container">
                        <div className="text-capitalize sortable-ghost-li list-content">
                            {getSVGIcons(cloneCard.type)}
                            <span className="mt-2 text-nowrap">
                                {/* {content.type} */}
                    {/* {handleType(cloneCard.type)}
                </span>
            </div>

                    </div > */}
                    < div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100" >
                        {getSVGIcons(cloneCard.type)}
                        < span className="pointer-events-none my-2 block truncate text-sm font-medium text-gray-900 text-center" >
                            {handleType(cloneCard.type)}
                        </span >
                    </div >

                </div >
            </div >
        );
    };

    function handleType(type: string) {
        switch (type) {
            case "link-button":
                return "Button"
            case "html":
                return "HTML"
            case "rss":
                return "RSS"
            case "product_list":
                return "Product"
            default:
                return type
        }

    }
    return (
        <div>
            {StaticContents.map((row: RowTypes, index: number) => {
                return (
                    <div key={index} >
                        <Draggable
                            draggableId={`editor-${row.type}-${index}-static`}
                            index={index}>
                            {(provided) => (
                                <div
                                    {...provided.draggableProps}

                                    ref={provided.innerRef}
                                >
                                    {row.columns.map((col: ColumnTypes, i: number) => {
                                        return (
                                            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8" key={i} style={{ width: `${col.columnWidthPercentage}%`, minHeight: "50px" }}>
                                                <Droppable
                                                    renderClone={getRenderItem(col.contents)}
                                                    droppableId="content-droppable"
                                                    type="content"
                                                    isDropDisabled={true}
                                                >
                                                    {(provided, snapshot) => (
                                                        <div
                                                            {...provided.droppableProps}
                                                            ref={provided.innerRef}
                                                            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8"
                                                        >
                                                            {col.contents.map((content: ContentType, index: number) => {
                                                                const cloneId = `column-0-${content.type}-${index}`
                                                                const shouldRenderClone = cloneId === snapshot.draggingFromThisWith;

                                                                return (
                                                                    <>
                                                                        {(contextData.proposalTemplateJSON.AMPMode) && (content.type === "html" || content.type === "video" || content.type === "rss" || content.type === "signature") ? <></> :
                                                                            <>
                                                                                {!contextData.proposalTemplateJSON.AMPMode && content.type === "forms" ? <></> :
                                                                                    <>
                                                                                        {shouldRenderClone ? (
                                                                                            <div className={`${content.type == "product_list" ? "col-start-1 col-span-2" : ""} react-beatiful-dnd-copy`}>
                                                                                                <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                                                                                    {getSVGIcons(content.type)}
                                                                                                    <span className="pointer-events-none my-2 block truncate text-sm font-medium text-gray-900 text-center">
                                                                                                        {handleType(content.type)}
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                        ) :
                                                                                            <Draggable key={index} draggableId={`column-${i}-${content.type}-${index}`} index={index} isDragDisabled={false}>
                                                                                                {(provided) => (
                                                                                                    <div
                                                                                                        {...provided.dragHandleProps}
                                                                                                        {...provided.draggableProps}
                                                                                                        ref={provided.innerRef}
                                                                                                        className={`${content.type == "product_list" ? "col-start-1 col-span-2" : ""}`}
                                                                                                        style={{ transform: "none !important" }}
                                                                                                    >
                                                                                                        <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                                                                                            {getSVGIcons(content.type)}
                                                                                                            <span className="pointer-events-none my-2 block truncate text-sm font-medium text-gray-900 text-center">
                                                                                                                {handleType(content.type)}
                                                                                                            </span>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                )}
                                                                                            </Draggable>
                                                                                        }

                                                                                    </>




                                                                                }


                                                                            </>
                                                                        }
                                                                    </>

                                                                )
                                                            })}


                                                        </div>
                                                    )}
                                                </Droppable>
                                            </div>
                                        )
                                    })}
                                </div>)}
                        </Draggable>
                    </div>
                )
            })}
        </div >
    );
}

export default Content;