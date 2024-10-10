<script>
	import ContentContainer from '$lib/components/ContentContainer.svelte';
	import { openLightbox } from '$lib/functions';
	import pdf1 from '$lib/assets/1a_Studer_IconesFungorum_001-171.pdf';
	import pdf2 from '$lib/assets/02_Otth_IconesFungorum_Agaricineen.pdf';
	import pdf3 from '$lib/assets/03_Otth_IconesFungorum_Agaricineen.pdf';
	import pdf4 from '$lib/assets/04_Otth_IconesFungorum_Agaricineen.pdf';
	import pdf5 from '$lib/assets/05_Otth_IconesFungorum_Agaricineen.pdf';
	import pdf6 from '$lib/assets/06_Otth_IconesFungorum_Polyporeen.pdf';
	import pdf7 from '$lib/assets/07_Otth_IconesFungorum_Polyporeen.pdf';
	import pdf8 from '$lib/assets/08_Otth_IconesFungorum_Hydneen+Telephoreen+Clavariaceen+Tremellineen.pdf';
	import pdf9 from '$lib/assets/09_Otth_IconesFungorum_Gastromyceten+Uredineen.pdf';
	import pdf10 from '$lib/assets/10_Otth_IconesFungorum_Discomyceten.pdf';
	import pdf11 from '$lib/assets/11_Otth_IconesFungorum_Tubericineen+Pyrenomyceten.pdf';
	import pdf12 from '$lib/assets/12_Otth_IconesFungorum_Imperfecti.pdf';
	import pdf13 from '$lib/assets/13_Otth_IconesFungorum_Ustilagineen+Phykomyceten+Myxomyceten.pdf';
</script>

<ContentContainer>
	<h1 class="h1">Gustav Otth</h1>
	Gustav Heinrich Otth (02.06.1806 – 08.11.1874) was a Swiss mycologist and military officer. He described
	several new fungi species and the genus Pucciniastrum within the family Pucciniastraceae. Detailed
	information about the life and works of Gustav Otth can be found in Eduard Fischer:<a
		href="https://boris.unibe.ch/159775/1/1909_E.Fischer.pdf"
		target="_blank"
	>
		Gustav Otth, ein bernischer Pilzforscher: 1806-1871, in Mitteilungen der Naturforschenden
		Gesellschaft in Bern, 1908, pp. 1665-1700
	</a>.
	<p>There are Illustrations of mushrooms.</p>
	<enhanced:img
		src="$lib/assets/FB_posts_pilzbuch_03.jpg"
		alt="agaricus adiposus"
		class="max-w-full md:max-w-96 md:float-left mx-auto mt-4 md:my-4 md:mr-6 border-8 border-primary-500 anchor cursor-pointer"
		on:click={(e) => {
			openLightbox(e.target);
		}}
		on:keypress={(e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				openLightbox(e.target);
			}
		}}
		role="presentation"
	/>
	<ul class="list-disc list-inside *:-indent-4 *:ml-4">
		<li>
			<a class="anchor" href={pdf1} target="_blank">Otth - Icones Fungorum I (Nr. 1 - 111)</a> - Hymenoceten,
			Agaricineen, Agaricus, Leucosporus 1 - geordnet nach Fries: Hymenomycetes europaei, 1874
		</li>
		<li>
			<a class="anchor" href={pdf2} target="_blank">Otth - Icones Fungorum II (Nr. 112 - 218)</a> - Hymenoceten,
			Agaricineen, Agaricus, Leucosporus 2 - geordnet nach Fries, 1874
		</li>
		<li>
			<a class="anchor" href={pdf3} target="_blank">Otth - Icones Fungorum III (Nr. 219 - 359)</a> -
			Hymenocetes, Agaricineen, Agaricus exclusive Leucosporus - geordnet nach Fries, 1874
		</li>
		<li>
			<a class="anchor" href={pdf4} target="_blank">Otth - Icones Fungorum IV (Nr. 360 - 472)</a> - Hymenocetes,
			Agaricineen, Coprinus bis Hygrophorus - geordnet nach Fries, 1874
		</li>
		<li>
			<a class="anchor" href={pdf5} target="_blank">Otth - Icones Fungorum V (Nr. 473 - 561b)</a> - Hymenocetes,
			Agaricineen, Lactarius bis Lenzites - geordnet nach Fries, 1874
		</li>
		<li>
			<a class="anchor" href={pdf6} target="_blank">Otth - Icones Fungorum VI (Nr. 562 - 651)</a> - Hymenocetes,
			Polyporeen, Boletus bis Polyporus 1 - geordnet nach Fries, 1874
		</li>
		<li>
			<a class="anchor" href={pdf7} target="_blank">Otth - Icones Fungorum VII (Nr. 652 - 754)</a> -
			Hymenocetes, Polyporeen, Polyporus 2 bis Solenia - geordnet nach Fries, 1874
		</li>
		<li>
			<a class="anchor" href={pdf8} target="_blank">Otth - Icones Fungorum VIII (Nr. 755 - 891)</a> -
			Hymenocetes, Hydneen, Telephoreen Clavariaceen u. Tremellineen - geordnet nach Fries, 1874
		</li>
		<li>
			<a class="anchor" href={pdf9} target="_blank">Otth - Icones Fungorum IX (Nr. 891 - 1026)</a> -
			Gastromyceten und Uredineen - geordnet nach Winter: Die Pilze in Rabenhorst Krypt. Flora, Ed. II
		</li>
		<li>
			<a class="anchor" href={pdf10} target="_blank">Otth - Icones Fungorum X (Nr. 1027 - 1188)</a> -
			Discomyceten - geordnet nach Rehm: Die Pilze in Rabenhorst Krypt. Flora, Ed. II
		</li>
		<li>
			<a class="anchor" href={pdf11} target="_blank">Otth - Icones Fungorum XI (Nr. 1189 - 1378)</a>
			- Tuberineen und Pyrenomyceten - geordnet nach Ed. Fischer und Winter in Rabenhorst Krypt. Flora,
			Ed. II
		</li>
		<li>
			<a class="anchor" href={pdf12} target="_blank">Otth - Icones Fungorum XII (Nr. 1379 - 1552)</a
			> - Imperfecti (Conidien unbekannter Zugehörigkeit) - alphabethisch geordnet
		</li>
		<li>
			<a class="anchor" href={pdf13} target="_blank"
				>Otth - Icones Fungorum XIII (Nr. 1553 - 1644)</a
			> - Ustilagineen, Phykomyceten, Myxomyceten - geordnet nach Winter und Ed. Fischer in Rabenhorst
			Krypt. Flora, Ed. II und Schröter in Krypt. Flora v. Schlesien
		</li>
	</ul>
</ContentContainer>
