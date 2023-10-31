import { DoublyLinkedList } from "./doubly-linked-list.js";
import { Heap, HeapSort } from "./heap.js";
import { FinancialRecord } from "./FinancialRecord.js";

/*
Клас, що реалізує двозв’язний список, має дозволяти
виконувати наступні операції на основі окремих методів: додавання
вузла в початок списку, додавання вузла після заданого, пошук вузла в
списку, видалення вузла, виведення вузлів на екран з початку та з
кінця.
*/

const list = new DoublyLinkedList(1);

list.insert(1, 2);
list.insert(2, 6);
list.insert(1, 7);
list.insert(1, 9);

console.log("DoublyLinkedList: ");
console.log(list.getFromStart());
console.log("Search data = 7: ", String(list.search(7)));
console.log("Remove 9");
list.remove(9);
console.log(list.getFromStart());
console.log("");

/*
	Фінансова діяльність підприємства представлена записами, що
	містять:
	– назву підприємства;
	– адресу;
	– місяць;
	– рік;
	– прибуток за даний місяць
*/

// prettier-ignore
const records = [
	new FinancialRecord('Cartwright LLC', 'Port Zenabury', 1, 2023, 98929),
	new FinancialRecord('Cartwright LLC', 'Port Zenabury', 2, 2023, 54537),
	new FinancialRecord('Cartwright LLC', 'Port Zenabury', 3, 2023, 2737),
	new FinancialRecord('Cartwright LLC', 'Port Zenabury', 4, 2023, 28807),
	new FinancialRecord('Cartwright LLC', 'Port Zenabury', 5, 2023, 87794),
	new FinancialRecord('Cartwright LLC', 'Port Zenabury', 6, 2023, 52163),
	new FinancialRecord('Cartwright LLC', 'Port Zenabury', 7, 2023, 71813),
	new FinancialRecord('Cartwright LLC', 'Port Zenabury', 8, 2023, 13101),
	new FinancialRecord('Cartwright LLC', 'Port Zenabury', 9, 2023, 22664),
	new FinancialRecord('Erdman - Waters', 'Port Omari', 1, 2022, 65817),
	new FinancialRecord('Erdman - Waters', 'Port Omari', 2, 2023, 5472),
	new FinancialRecord('Erdman - Waters', 'Port Omari', 3, 2023, 75018),
	new FinancialRecord('Erdman - Waters', 'Port Omari', 4, 2022, 62397),
	new FinancialRecord('Erdman - Waters', 'Port Omari', 5, 2022, 58051),
	new FinancialRecord('Schaefer - Kautzer', 'Raushire', 6, 2022, 5726),
	new FinancialRecord('Zemlak, Volkman and Morissette', 'Surprise', 1, 2023, 68899),
	new FinancialRecord('Zemlak, Volkman and Morissette', 'Surprise', 2, 2023, 83181),
	new FinancialRecord('Zemlak, Volkman and Morissette', 'Surprise', 3, 2022, 61105),
	new FinancialRecord('Zemlak, Volkman and Morissette', 'Surprise', 4, 2023, 34930),
	new FinancialRecord('Hirthe - Grimes', 'Killeen', 1, 2023, 15143),
	new FinancialRecord('Cole - Bins', 'East Rowan', 1, 2023, 97187),
	new FinancialRecord('Gleichner - Dibbert', 'South Alvah', 8, 2023, 33077),
	new FinancialRecord('Waelchi Group', 'Cheektowaga', 1, 2023, 16515),
	new FinancialRecord('Waelchi Group', 'Cheektowaga', 2, 2023, 21019),
	new FinancialRecord('Waelchi Group', 'Cheektowaga', 3, 2023, 91653),
	new FinancialRecord('Waelchi Group', 'Cheektowaga', 4, 2023, 78815),
	new FinancialRecord('Waelchi Group', 'Cheektowaga', 5, 2023, 37380),
	new FinancialRecord('Waelchi Group', 'Cheektowaga', 6, 2023, 61544),
	new FinancialRecord('Miller, White and Stark', 'New Ryan', 1, 2023, 75505),
	new FinancialRecord('Miller, White and Stark', 'New Ryan', 2, 2023, 74164),
	new FinancialRecord('Miller, White and Stark', 'New Ryan', 3, 2023, 21339),
	new FinancialRecord('Miller, White and Stark', 'New Ryan', 4, 2023, 91388),
	new FinancialRecord('Miller, White and Stark', 'New Ryan', 5, 2023, 53429),
	new FinancialRecord('Miller, White and Stark', 'New Ryan', 6, 2023, 15504),
	new FinancialRecord('Miller, White and Stark', 'New Ryan', 7, 2022, 94464)
]

console.log("Індивідуальне завдання варіант 2:");

/*
Визначити перелік підприємств, які за вказаний рік входять у
число 25 % найприбутковіших за даний рік. У випадку
неоднозначності віддавати пріоритет підприємству, яке має більший
максимальний прибуток протягом всіх місяців даного року.
*/

const heap = new Heap().fromArray(records);
heap.getPrint();
const sortedCompanies = new HeapSort(heap).getSorted();

const currentYear = sortedCompanies.filter(item => item.year === 2023);

const byYear = currentYear.reduce((acc, item) => {
  return {
    ...acc,
    [item.name]: (acc[item.name] || 0) + item.profit,
  };
}, {});

const entries = Object.entries(byYear).sort((a, b) => b[1] - a[1]);
const items = entries.slice(0, Math.ceil(entries.length * 0.25));

console.log();
console.log("Сумми компаній за 2023 рік:", byYear);
console.log();
console.log(
  "Топ 25% компаній за 2023 рік:\n",
  items.map(item => {
    return `${item[1]} - ${item[0]}`;
  }),
);
