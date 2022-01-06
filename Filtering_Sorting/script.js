var vm = new Vue({
	el:  "#listing",
	data: {
		 "quotes" : [
    {
      "id": 1,
      "price": 100,
      "name": "Atlas-america",
      "description": "Best comprehensive plan for visitors",
      "type": "Comprehensive",
      "section": "Travel Medical",
      "bestSellers": true
    },
    {
      "id": 2,
      "price": 150,
      "name": "Atlas-international",
      "description": "Best comprehensive plan for international travel",
      "type": "Comprehensive",
      "section": "International Travel Medical",
      "bestSellers": true
    },
    {
      "id": 3,
      "price": 75,
      "name": "IMG Patriot America",
      "description": "Comprehensive plan for visitors",
      "type": "Comprehensive",
      "section": "Travel Medical",
      "bestSellers": true
    },
    {
      "id": 4,
      "price": 250,
      "name": "IMG Patriot International",
      "description": "Comprehensive plan for international travel",
      "type": "Comprehensive",
      "section": "International Travel Medical",
      "bestSellers": false
    },
    {
      "id": 5,
      "price": 15,
      "name": "Visitor Care",
      "description": "Fixed plan for domestic travel",
      "type": "Fixed",
      "section": "Travel Medical",
      "bestSellers": true
    },
    {
    "id": 6,
    "price": 50,
    "name": "Visitor Secure",
    "description": "Fixed plan for domestic travel",
    "type": "Fixed",
    "section": "Travel Medical",
    "bestSellers": false
    },
    {
      "id": 7,
      "price": 87,
      "name": "Student travel",
      "description": "Best student travel plan",
      "type": "Fixed",
      "section": "Student Medical",
      "bestSellers": true
    },
    {
      "id": 8,
      "price": 69,
      "name": "Student comprehensive",
      "description": "Best student comprehensive plan",
      "type": "Comprehensive",
      "section": "Student Medical",
      "bestSellers": true
    },
    {
      "id": 9,
      "price": 154,
      "name": "J1 insurance",
      "description": "Best J1 comprehensive plan",
      "type": "Comprehensive",
      "section": "J1 Medical",
      "bestSellers": false
    },
    {
      "id": 10,
      "price": 200,
      "name": "J1 insurance comprehensive",
      "description": "J1 comprehensive plan",
      "type": "Comprehensive",
      "section": "J1 Medical",
      "bestSellers": true
    },
    {
      "id": 11,
      "price": 20,
      "name": "J1 insurance fixed",
      "description": "J1 fixed plan",
      "type": "Fixed",
      "section": "J1 Medical",
      "bestSellers": false
    },
    {
      "id": 12,
      "price": 200,
      "name": "Trawick Safe Travels",
      "description": "Top travel plan",
      "type": "Comprehensive",
      "section": "Travel Medical",
      "bestSellers": true
    },
    {
      "id": 13,
      "price": 250,
      "name": "Trawick Safe Travels Fixed",
      "description": "Top travel plan fixed",
      "type": "Fixed",
      "section": "Travel Medical",
      "bestSellers": true
    },
    {
      "id": 14,
      "price": 230,
      "name": "Trawick Safe Travels International",
      "description": "Top travel plan for international travel",
      "type": "Comprehensive",
      "section": "International Travel Medical",
      "bestSellers": true
    },
    {
      "id": 15,
      "price": 50,
      "name": "Insubuy Care plan",
      "description": "Top travel plan for insurance",
      "type": "Comprehensive",
      "section": "Travel Medical",
      "bestSellers": true
    }
    ],
		selectedCategory: "All"
	},
	computed: {
		filteredproducts: function() {
			var vm = this;
			var type = vm.selectedCategory;
			
			if(type === "All") {
				return vm.quotes;
			} else {
				return vm.quotes.filter(function(product) {
					return product.type === type;
				});
			}
		}
	}
});