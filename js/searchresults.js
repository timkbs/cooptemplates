function showTab(name){
  var tabNames = Array('viewCommentsTab','addCommentTab','rateTab','otherFormatsTab','otherTitlesTab','otherTab');
  for(var i=0;i<tabNames.length;i++){
    if(tabNames[i]==name){
      document.getElementById(tabNames[i]).setAttribute('class','tabContent');
      document.getElementById(tabNames[i]).style.display='';
      document.getElementById(tabNames[i]+'Button').setAttribute('class','selectedTab');
    } else {
      document.getElementById(tabNames[i]).setAttribute('class','tabContent');
      document.getElementById(tabNames[i]).style.display='none';
      document.getElementById(tabNames[i]+'Button').setAttribute('class','unselectedTab');
    }
  }
  return true;
}
