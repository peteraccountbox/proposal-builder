import { Switch } from "@headlessui/react";
import Accordion from "../Accordion";
import { contentAccordion } from "../Utils";
import { FullWidthOnMobileProps } from "../models/ContentModels";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

function FullWidthOnMobile(props: FullWidthOnMobileProps) {
    const { fullWidthMobile, onChangeFullWidthMobile } = props
    return (
        <>

            <Accordion title="Full Width On Mobile" accordionJSX={() => {
                return (
                    <>
                        {/* <div className="form-check form-switch custom-switch d-flex align-items-center justify-content-between">
                            <label className="form-check-label mb-0">
                                Full Width On Mobile</label>
                            <input checked={fullWidthMobile} onChange={(e) => onChangeFullWidthMobile(e.target.checked)} className="form-check-input fs-16" type="checkbox" role="switch" id="flexSwitchCheckChecked" />

                        </div> */}

                        <Switch.Group as="div" className="flex items-center justify-between">
                            <span className="flex flex-grow flex-col">
                                <Switch.Label as="span" className="text-sm leading-6 text-gray-900" passive>
                                    Full Width On Mobile
                                </Switch.Label>
                            </span>
                            <Switch
                                checked={fullWidthMobile}
                                onChange={(e) => onChangeFullWidthMobile(!fullWidthMobile)}
                                id="flexSwitchCheckChecked"
                                className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                            >
                                <span aria-hidden="true" className="pointer-events-none absolute h-full w-full rounded-md bg-white" />
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        fullWidthMobile ? 'bg-blue-600' : 'bg-gray-200',
                                        'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out'
                                    )}
                                />
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        fullWidthMobile ? 'translate-x-5' : 'translate-x-0',
                                        'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                        </Switch.Group>
                    </>
                )
            }} />
        </>
    );
}

export default FullWidthOnMobile;

