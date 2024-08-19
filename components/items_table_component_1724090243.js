/* Summary: Contains a section with:
- A title for the table
- A table with 6 rows and 2 columns. The first column of each row contains the item name on top and description under it. The second column of each row contains the item's price.
- If the user hovers over a price, it shows a blue button on the row labelled "Details"
*/

Vue.component("items_table_component_1724090243", {
    template: `
    <section id="items-table-component" class="py-8 bg-white">
        <h2 id="costs-title" class="text-lg font-semibold mb-5">Exotic Lizard Collection</h2>
        <div id="costs-table-container" class="overflow-x-auto">
            <table id="costs-table" class="table-auto w-full text-sm">
                <thead id="costs-table-header" class="sr-only" id="costs-table-header">
                    <tr>
                        <th id="description-header">Description</th>
                        <th id="cost-header" scope="col">Cost</th>
                    </tr>
                </thead>
                <tbody id="costs-table-body">
                    <tr class="group odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900" id="costs-row-1" >
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg after:w-px after:h-8 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 group-hover:after:opacity-0 after:transition-opacity after:bg-slate-200 dark:after:bg-slate-800" id="costs-cell-description-1">
                            <div class="font-semibold mb-0.5" id="costs-link-1">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" >
                                    Green Iguana
                                </a>
                            </div>
                            <p class="after:bg-slate-200 dark:after:bg-slate-800" id="costs-description-1">Majestic herbivore with vibrant green scales</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50% after:text-blue-500" id="costs-cell-cost-1">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$199.99</a>
                        </td>
                    </tr>
                    <tr class="group odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900" id="costs-row-1" >
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg after:w-px after:h-8 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 group-hover:after:opacity-0 after:transition-opacity after:bg-slate-200 dark:after:bg-slate-800" id="costs-cell-description-1">
                            <div class="font-semibold mb-0.5" id="costs-link-1">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" >
                                    Bearded Dragon
                                </a>
                            </div>
                            <p class="after:bg-slate-200 dark:after:bg-slate-800" id="costs-description-1">Friendly desert dweller with spiky beard</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50% after:text-blue-500" id="costs-cell-cost-1">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$89.99</a>
                        </td>
                    </tr>
                    <tr class="group odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900" id="costs-row-3">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg" id="costs-cell-description-3">
                            <div class="font-semibold mb-0.5"  id="costs-link-3">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html">Leopard Gecko</a>
                            </div>
                            <p class="after:bg-slate-200 dark:after:bg-slate-800"  id="costs-description-3">Docile nocturnal gecko with spotted pattern</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50% after:text-blue-500" id="costs-cell-cost-3">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$59.99</a>
                        </td>
                    </tr>
                    <tr class="group odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900" id="costs-row-4">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg" id="costs-cell-description-4">
                            <div class="font-semibold mb-0.5"  id="costs-link-4">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html">Blue-Tongued Skink</a>
                            </div>
                            <p class="after:bg-slate-200 dark:after:bg-slate-800"  id="costs-description-4">Large, gentle lizard with distinctive blue tongue</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50% after:text-blue-500" id="costs-cell-cost-4">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$149.99</a>
                        </td>
                    </tr>
                    <tr class="group odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900" id="costs-row-5">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg" id="costs-cell-description-5">
                            <div class="font-semibold mb-0.5"  id="costs-link-5">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html">Veiled Chameleon</a>
                            </div>
                            <p class="after:bg-slate-200 dark:after:bg-slate-800"  id="costs-description-5">Color-changing arboreal lizard with unique head crest</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50%" id="costs-cell-cost-5 after:text-blue-500">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$129.99</a>
                        </td>
                    </tr>
                    <tr class="group odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900" id="costs-row-6">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg" id="costs-cell-description-6">
                            <div class="font-semibold mb-0.5"  id="costs-link-6">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html">Crested Gecko</a>
                            </div>
                            <p class="after:bg-slate-200 dark:after:bg-slate-800"  id="costs-description-6">Arboreal gecko with eyelash-like crests</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50%" id="costs-cell-cost-6 after:text-blue-500">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">$79.99</a>
                        </td>
                    </tr>
                </tbody>
                <tfoot id="costs-table-footer">
                    <tr>
                        <th id="total-description" scope="row" class="relative text-left font-normal px-4 py-5">
                            <p id="total-description-text" class="italic text-slate-500">TOT in USD dollar</p>
                        </th>
                        <td id="total-cost" class="relative font-semibold text-right text-base underline px-4 py-5 w-[1%] text-emerald-500"> $709.94</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
