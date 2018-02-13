import Map from '../../components/Map/Map';
import VisualSlider from '../../components/VisualSlider/VisualSlider';
import VisualCafeDetail from '../../components/VisualCafeDetail/VisualCafeDetail';
import InputDropdown from '../../components/InputDropdown/InputDropdown.vue';
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon.vue";
import ButtonGeneral from "../../components/ButtonGeneral/ButtonGeneral";
import AllFilters from "../../components/AllFilters/AllFilters.vue";



export default {
	name: 'customMap',
	components: {
		MapWrapper: Map,
		VisualCafeDetail,
		VisualSlider,
		InputDropdown,
		ButtonIcon,
		ButtonGeneral,
		AllFilters
	},
	data() {
		return {
			title: 'CustomMap',
			coffee: null,
		};
	},
	methods: {
		handleCoffeeClick : function(coffee) {
			this.coffee = coffee; // TODO: Hacer que se obtenga el café desde un getter
			console.log('Path click #2');
			this.$router.push({name: 'coffee', params:{id: coffee.id}});
		},
		changeNeighborhood(value) {
				this.$store.dispatch('actionTest', value);
		},
		closeDetail() {
			this.coffee = null;
		},
		handleMarkerClick : function(coffee) {			
			let idx = this.coffees.indexOf(coffee);	
			this.$refs.slider.slideTo(idx);		
		},
		OpenFilters(){
			console.log("filter btn works");
		},
		handleClick() {
		  this.$router.push("/map");
		},
		handleClickFilter(filter){
		  this.$store.dispatch('Filter', filter);
		},
	},
	computed: {
		neighborhood(){
			return this.$store.state.neighborhood;
		},
		coffees(){
			return this.$store.getters.getFilteredCoffes;
		}
	},
};
