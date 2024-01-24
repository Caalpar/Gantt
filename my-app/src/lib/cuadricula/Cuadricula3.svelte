<script>
    import Phases from "./Phases.svelte";
    import Weeks from "./Weeks.svelte";
    

</script>

<main>
    <div class="main-container">
        <Phases/>
        <Weeks/>

    </div>

</main>

<style>
    .main-container{
        display: grid;
        grid-template-columns: 50% 50%;
    
    }
</style>

<!-- markup (zero or more items) goes here -->