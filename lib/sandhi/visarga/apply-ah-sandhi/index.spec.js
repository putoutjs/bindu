import {createSandhiTest} from "#sandhi-test";

import * as plugin from "./index.js";

const test = createSandhiTest(import.meta.url, {plugins: ["apply-ah-sandhi", plugin]});

test("bindu: sandhi: apply-ah-sandhi: report", (t) => {
    t.report("apply-ah-sandhi", "rAmAH + asti -> rAm sti");
    t.end();
});

test("bindu: sandhi: apply-ah-sandhi: transform", (t) => {
    t.transform("apply-ah-sandhi");
    t.end();
});

test("bindu: sandhi: apply-ah-sandhi: no report: no-n", (t) => {
    t.noReport("no-n");
    t.end();
});
