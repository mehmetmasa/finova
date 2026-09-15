import{S as s}from"./sortable.esm-j3KvE6KT.js";window.initKanban=function(){document.querySelectorAll(".tasks-container").forEach(a=>{a.sortable&&a.sortable.destroy()});const e=document.querySelector(".lists-container");e!=null&&e.sortable&&e.sortable.destroy(),e&&new s(e,{animation:150,handle:".list-handle",draggable:".list-item",ghostClass:"opacity-50",dragClass:"bg-gray-100",forceFallback:!0,onEnd:function(a){const n=Array.from(a.to.children).filter(t=>t.classList.contains("list-item")).map((t,r)=>({id:t.dataset.listId,order:r})),o=document.querySelector("[wire\\:id]");Livewire.find(o.getAttribute("wire:id")).call("handleListReorder",n)}}),document.querySelectorAll(".tasks-container").forEach(a=>{new s(a,{group:"tasks",animation:150,handle:".task-handle",draggable:".task-item",ghostClass:"opacity-50",dragClass:"bg-gray-100",forceFallback:!0,filter:".non-draggable",onEnd:function(n){const o=n.to.closest(".list-item").dataset.listId,i=Array.from(n.to.children).filter(t=>t.classList.contains("task-item")).map((t,r)=>({id:t.dataset.taskId,order:r}));if(i.length&&o){const t=document.querySelector("[wire\\:id]");Livewire.find(t.getAttribute("wire:id")).call("handleTaskReorder",{tasks:i,targetListId:o})}}})})};const l=document.createElement("style");l.textContent=`
    /* Marker'ları kaldır */
    .lists-container {
        list-style: none !important;
    }
    .lists-container > * {
        list-style: none !important;
    }
    .lists-container > *::marker {
        display: none !important;
    }
    
    .sortable-fallback {
        transform: rotate(3deg);
        opacity: 0.8;
        cursor: grabbing !important;
    }
    .task-item, .list-item {
        touch-action: none;
        cursor: grab;
    }
    .task-item:active, .list-item:active {
        cursor: grabbing;
    }
    .tasks-container {
        min-height: 200px;
        display: flex;
        flex-direction: column;
        list-style: none !important;
    }
    .tasks-container > * {
        list-style: none !important;
    }
    .tasks-container > *::marker {
        display: none !important;
    }
    .tasks-container:empty::after {
        content: '';
        flex: 1;
        border: 2px dashed #e5e7eb;
        border-radius: 0.5rem;
        margin: 0.5rem;
    }
    .tasks-container.sortable-drag-active {
        background-color: rgba(243, 244, 246, 0.5);
    }
    
    /* Butonlar için z-index ve pointer-events ayarları */
    .action-buttons {
        position: relative;
        z-index: 10;
    }
    .action-buttons button {
        pointer-events: auto !important;
    }
    .non-draggable {
        pointer-events: auto !important;
    }
`;document.head.appendChild(l);
