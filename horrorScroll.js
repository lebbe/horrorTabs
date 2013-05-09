$(function () {

	// Check if there is a scrollbar, if it is, show right arrow
	

	$('.tabs').on('scroll touchmove', function(event) {
		var self = this;
		var $self = $(self);

		if($self.width() + self.scrollLeft >= self.scrollWidth - 35) {
			$self.parent().find('.arrow.right').css({opacity: 0});
		} else {
			$self.parent().find('.arrow.right').css({opacity: 1});
		}
		
		if(self.scrollLeft < 30) {
			$self.parent().find('.arrow.left').css({opacity: 0});
		} else {
			$self.parent().find('.arrow.left').css({opacity: 1});
		}

		$self.scrollTop(0);
	});
});