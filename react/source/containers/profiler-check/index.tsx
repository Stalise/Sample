import {
    Profiler,
    ProfilerOnRenderCallback,
    useState,
    useTransition,
    useDeferredValue,
} from "react";

import { MyButton } from "components/my-button";
import { Item } from "components/item";
import { hundredItems } from "data/hundred-items";
import { twoHundredItems } from "data/two-hundred-items";
import { thousandItems } from "data/thousand-items";
import type { IItem } from "types/common";

import styles from "./index.module.scss";

export const ProfilerCheck: React.FC = () => {
    // const [isPending, startTransition] = useTransition();
    const [items, setItems] = useState<IItem[]>([]);

    // const deferredItems = useDeferredValue(items);

    const handleItemsRender: ProfilerOnRenderCallback = (
        id,
        phase,
        actualTime,
        baseTime,
        startTime,
        commitTime
    ) => {
        console.group("Report of profiling");
        console.log(`${id}'s phase: ${phase}`);
        console.log(`Actual time: ${actualTime}`);
        console.log(`Base time: ${baseTime}`);
        console.log(`Start time: ${startTime}`);
        console.log(`Commit time: ${commitTime}`);
    };

    const clearItems = () => {
        setItems([]);
    };

    const addHundredItems = () => {
        setItems(hundredItems);
    };

    const addTwoHundredItems = () => {
        setItems(twoHundredItems);
    };

    const addNineHundredItems = () => {
        // startTransition(() => {
        //     setItems(thousandItems);
        // });
        setItems(thousandItems);
    };

    return (
        <>
            <div>
                <MyButton text="Clear" onClick={clearItems} />
                <MyButton text="Add 100" onClick={addHundredItems} />
                <MyButton text="Add 200" onClick={addTwoHundredItems} />
                <MyButton text="Add 1000" onClick={addNineHundredItems} />
            </div>
            <Profiler id="items" onRender={handleItemsRender}>
                {/* {isPending && <h2>🌀 Loading...</h2>} */}
                <div className={styles.items}>
                    {items.length > 0 && (
                        <>
                            {items.map((item) => (
                                <Item {...item} key={item.email} />
                            ))}
                        </>
                    )}
                </div>
            </Profiler>
        </>
    );
};
