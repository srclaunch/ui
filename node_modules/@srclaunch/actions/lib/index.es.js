const Navigation = {
  go: (path) => {
    window.history.pushState({}, "", path);
  }
};
const Application = {
  Navigation
};
const Panel = {
  show: ({
    edit,
    id,
    model
  }) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (id && edit) {
      searchParams.set("edit", `${model}/${id}`);
    } else if (id) {
      searchParams.set("view", `${model}/${id}`);
    } else {
      searchParams.set("new", model);
    }
    const newRelativePathQuery = window.location.pathname + "?" + searchParams.toString();
    console.log("newRelativePathQuery", newRelativePathQuery);
    window.history.pushState(null, "", newRelativePathQuery);
  },
  hide: () => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete("edit");
    searchParams.delete("new");
    searchParams.delete("view");
    const newRelativePathQuery = window.location.pathname + (searchParams.toString().length > 0 ? "?" + searchParams.toString() : "");
    window.history.pushState(null, "", newRelativePathQuery);
  }
};
const Entity = {
  Panel
};
var fileDownload = function(data, filename, mime, bom) {
  var blobData = typeof bom !== "undefined" ? [bom, data] : [data];
  var blob = new Blob(blobData, { type: mime || "application/octet-stream" });
  if (typeof window.navigator.msSaveBlob !== "undefined") {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    var blobURL = window.URL && window.URL.createObjectURL ? window.URL.createObjectURL(blob) : window.webkitURL.createObjectURL(blob);
    var tempLink = document.createElement("a");
    tempLink.style.display = "none";
    tempLink.href = blobURL;
    tempLink.setAttribute("download", filename);
    if (typeof tempLink.download === "undefined") {
      tempLink.setAttribute("target", "_blank");
    }
    document.body.appendChild(tempLink);
    tempLink.click();
    setTimeout(function() {
      document.body.removeChild(tempLink);
      window.URL.revokeObjectURL(blobURL);
    }, 200);
  }
};
function downloadDataAsFile({
  data,
  fileName
}) {
  fileDownload(data, `${fileName}.csv`);
}
export { Application, Entity, downloadDataAsFile };
