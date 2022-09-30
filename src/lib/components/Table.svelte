<script lang="ts">
export let data: any;
</script>
<div class="overflow-x-auto mb-8 mx-auto max-w-screen-lg">
    <table class="table w-full">
        <!-- head -->
        <thead>
            <tr>
                <th />
                <th>Date</th>
                <th>Volume</th>
            </tr>
        </thead>
        <tbody>
            <!-- row 1 -->
            {#each data?.data as row, i}
            <tr>
                <th>{i+1}</th>
                <td>{new Date(row?.time).toDateString()}</td>
                <td>{row?.volume}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>