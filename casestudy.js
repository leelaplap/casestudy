let Story = function (name) {
    this.name = name;
    this.story = [];

    this.setName = function (value) {
        this.name = value;
    };

    this.getName = function () {
        return this.name;
    };
};

let Information = function (name, author, genre, chap, content) {

    this.author = author;
    this.genre = genre;
    this.chap = chap;
    this.content = content;
    this.name = name;

    this.setName = function (value) {
        this.name = value;
    };

    this.getName = function () {
        return this.name;
    };


    this.setAuthor = function (value) {
        this.author = value;
    };

    this.getAuthor = function () {
        return this.author;
    };

    this.setGenre = function (value) {
        this.genre = value;
    };

    this.getGenre = function () {
        return this.genre;
    };

    this.setChap = function (value) {
        this.chap = value;
    };

    this.getChap = function () {
        return this.chap;
    };

    this.setContent = function (value) {
        this.content = value;
    };

    this.getContent = function () {
        return this.content;
    };

    this.getInformation = function () {
        return "Tác giả là: " + this.getAuthor() + "\n" + "Thể loại: " + this.getGenre() + "\n" + "Số chương hiện có: " + this.getChap() + "\n" + "Nội dung của truyện: " + "\n" + this.getContent();
    }


};

let library = new Story();

let info_1 = new Information("Doraemon", " Fujiko Fujio", "Hài hước, viễn tưởng", 112, " Doraemon (Đôrêmon) là một chú mèo máy được Sewashi (Nôbitô), cháu ba đời của Nobita gửi về quá khứ cho ông mình để giúp đỡ Nobita tiến bộ, tức là cũng sẽ cải thiện hoàn cảnh của con cháu Nobita sau này." +
    " Còn ở hiện tại, Nobita là một cậu bé luôn thất bại ở trường học, và sau đó là thất bại trong công việc, đẩy gia đình và con cháu sau này vào cảnh nợ nần.\n" +
    "\n" +
    "Các câu chuyện trong Doraemon thường có một công thức chung, đó là xoay quanh những rắc rối hay xảy ra với cậu bé Nobita học lớp năm, nhân vật chính thứ nhì của bộ truyện. Doraemon có một chiếc túi thần kỳ trước bụng với đủ loại bảo bối của tương lai. " +
    "Cốt truyện thường gặp nhất sẽ là Nobita trở về nhà khóc lóc với những rắc rối mà cậu gặp phải ở trường hoặc với bạn bè. Sau khi bị cậu bé van nài hoặc thúc giục," +
    " Doraemon sẽ đưa ra một bảo bối giúp Nobita giải quyết những rắc rối của mình, hoặc là để trả đũa hay khoe khoang với bạn bè của cậu. Nobita sẽ lại thường đi quá xa so với dự định ban đầu của Doraemon, thậm chí với những bảo bối mới cậu còn gặp rắc rối lớn hơn trước đó. " +
    "Đôi khi những người bạn của Nobita, thường là Suneo (Xêkô) hoặc Jaian (Chaien) lại lấy trộm những bảo bối và sử dụng chúng không đúng mục đích. Tuy nhiên thường thì ở cuối mỗi câu chuyện, những ai sử dụng sai mục đích bảo bối sẽ phải chịu hậu quả do mình gây ra, và người đọc sẽ rút ra được bài học từ đó.");

let info_2 = new Information("Cổ Chân Nhân", "Cổ Chân Nhân", "tiên hiệp, huyền huyễn ", 176, "Con người linh hồn vạn vật, cổ là tinh hoa trời đất. Tam quan bất chính, ma đầu sống lại. Chuyện xưa một người xuyên qua không ngừng sống lại. Một thế giới kì lạ của người nuôi cổ, dùng cổ, luyện cổ. Xuân Thu Thiền, Nguyệt Quang cổ, Tửu Trùng, Nhất Khí Kim Quang Trùng, Thanh Ti cổ, Hi Vọng cổ... Còn có một kẻ tuyệt thế ma đầu tận tình tung hoành!\n" +
    "\n" +
    "\n" +
    "Phương Nguyên mặc một bộ trường bào xanh biếc rách nát, tóc tai bù xù, cả người đẫm máu, nhìn bốn phía xung quanh. Nhất quyết không giao Xuân Thu Thiền, hắn phải tu luyện thành công Xuân Thu Thiền, trở thành đại ma đầu độc tôn, ác liệt nhất tam giới. Ba trăm năm trước chính là bọn họ đẩy Phương Nguyên hắn vào con đường này, không cho hắn đường thoát dồn hắn đến chỗ chết. Hiện tại lại muốn đòi Xuân Thu Thiền, giả nhân giả nghĩa với bộ mặt nhân đạo ấy.\n" +
    "\n" +
    "\n" +
    "Hắn hại hàng ngàn hàng vạn người, sinh linh đầu oán, tất cả đều là do bọn đại nghĩa kia tạo nên không thể trách hắn được. Trước khi hắn chết, máu nhuộm cả đá trắng, một lần cuối cùng hắn lao xuống... trở thành một người khác, một thân thể mới, một căn tu tốt hơn");

let info_3 = new Information("Thám tử lừng danh Conan", " Aoyama Gōshō", "Hài hước, trinh thám", 952, "Kudo Shinichi là một thám tử trung học rất nổi tiếng, thường xuyên giúp cảnh sát phá giải các vụ án khó khăn." +
    " Trong một lần khi đang theo dõi 1 vụ tống tiền, cậu bị đồng bọn (thành viên của Tổ chức Áo đen) phát hiện. Chúng ép cậu uống thử loại thuốc độc (APTX 4869) tổ chức vừa điều chế nhằm bịt đầu mối nhưng thứ thuốc ấy không giết chết cậu mà khiến cậu teo nhỏ thành một đứa trẻ." +
    " Sau đó, cậu tự xưng Edogawa Conan sống tại nhà thám tử Mori Kogoro. Xuyên suốt xê-ri cậu âm thầm hỗ trợ ông Mori phá các vụ án. Đồng thời cậu cũng phải đi học lại tiểu học, kết thân với nhiều người và lập ra Đội thám tử nhí.\n" +
    "\n" +
    "Về sau một học sinh tiểu học bất đắc dĩ khác tên là Haibara Ai tiết lộ rằng cô ấy chính là người đã tạo ra thuốc teo nhỏ, " +
    "vì muốn tách khỏi Tổ chức nên đã uống loại thuốc độc APTX4869 (cùng loại thuốc mà Conan bị ép uống) và cơ thể cũng bị teo nhỏ như Conan.[4] Trong một vài vụ án liên quan đến Tổ chức Áo đen, Conan đã hỗ trợ các điệp viên của FBI và CIA");

let info_4 = new Information("Ta Sinh Con Cho Tổng Tài", "Quất Miêu Ca Ca", "Ngược,Sủng,Đam Mỹ", 144, "Trên thế giới có hơn 50 quốc gia xuất hiện tiền lệ nam giới sinh con, Mỹ Santiago thậm chí nổ ra tin lạ có một không hai nam giới sinh giải phẫu sinh ra 5 bào thai! " +
    "Bên cạnh kèm theo một tấm ảnh chụp chung của phu phu ở bên cạnh 5 bào thai trong lồng ấp, bên trong còn có mấy nhân viên ghi chép, bọn họ đang ghi lại Guinness thế giới mà đôi phu phu này ban phát - Người đàn ông có năng lực sinh nhất toàn thế giới!\n" +
    "\n" +
    "Dư Bảo Nguyên sợ tới có thể nuốt sống một quả trứng gà. Đầu năm nay, heo mẹ có thể leo cây, heo đực có thể sinh con? Tuyệt đối vậy! Âm thanh cậu khẽ run rẩy," +
    " \"Trong bụng tôi...... Thật sự có đứa nhỏ?\" \"Đúng vậy, ngài có thể về nhà cẩn thận tiêu hóa mấy tin tức kia.\"");

let info_5 = new Information("Tiểu Hỗn Đản Vs Đại Tổng Giám Đốc", " Ngô Đồng Tiểu Phong", "Bách Hợp", 70, "Thiệu Phong nằm cạnh Thiệu Đường cùng hai người khác ở hoa viên cô nhi viện, bọn họ cùng hướng về khoảng trời bao la muốn tìm một việc gì đó làm để đỡ nhàm chán." +
    "Ngôn Nặc đã từ nước ngoài trở về. Sở dĩ hôm nay cô trở về vì có việc cần làm, cô có chút rắc rối cần nhờ chị Tuyết Nhu giúp đỡ. Nhưng sự trở về của Ngôn Nặc đã mở ra một mối lương duyên cho cô.\n" +
    "\n" +
    "\n" +
    "Tuyết Nhu là người yêu của Thiệu Phong khi cùng nhau gặp gỡ giao lưu với Ngôn Nặc thì người oan gia Thiệu Đường kia nhìn sao cũng không vừa mắt với cô tiểu thư này." +
    " Nhưng dù sao cô ta cũng là tổng giám đốc của anh nên có như thế nào cũng phải nhịn. Nhưng không ngờ sự tiếp xúc lâu ngày cũng những cuộc cãi vã đã khiến anh phát hiện mình đã yêu cô tiểu thư đáng ghét kia.\n" +
    "\n" +
    "\n" +
    "Giờ anh phải làm sao để thổ lộ với cô trong khi Ngôn Nặc vô cùng ghét anh vì anh dám xem thường cô");

let info_6 = new Information("Hệ Thống Ông Trùm Xã Hội Đen", "Hàn Thiên Mặc", "Ngôn Tình, Đô Thị Võng Du, Huyền Huyễn, Dị NăngVăn học Việt", 720, "Diệp Hoa cố gắng ổn định hơi thở, hắn thu mình ngồi trên một chiếc sofa rách nát. " +
    "Nắm chặt điếu thuốc trên tay, hắn không khỏi cười khổ. Hắn là ai? Diệp Hoa, người nắm trong tay công ty Linh Hoa sở hữu tài sản lên đến hàng trăm ức đô la mĩ, trong giới kinh doanh ai cũng phải khép nép gọi hắn một tiếng Diệp tổng." +
    " Nhưng Diệp Hoa, hắn còn một thân phận khác mà trong giới hắc đạo ai nghe thấy cũng phải kinh sợ “Diệp ma đầu”. Người cầm đầu bang hội Hắc Long, Tương truyền rằng Diệp ma đầu đã từng đơn thương độc mã xông vào bang Hắc Hổ hội – Một trong tam hội mạnh nhất lúc bấy giờ chỉ để đòi lại công đạo cho đàn em của mình," +
    " lúc đi ra người không dính một giọt máu.\n" +
    "\n" +
    "\n" +
    "\n" +
    "Nhìn lại bộ dạng nhếch nhác của mình hai hàng lông mày sắc bén không khỏi nhíu lại, trên người hắn chằng chịt những vết dao kiếm, thậm chí nếu nhìn kĩ sẽ còn thấy cả một chút xương trắng lộ ra trông thật ghê người." +
    " Hắn biết mình không còn cầm cự được lâu, trong lúc này hắn nhớ về gia đình mình, nơi đó có cha mẹ hắn và đặc biệt còn có em gái của mình. Nhớ về Diệp Linh, Diệp Hoa không khỏi thương tâm. " +
    "Em gái của hắn mất vì bị chính kẻ địch của hắn tính kế ám sát cô, cũng vì sự việc đó xảy ra nên hắn đã quyết tâm dấn thân vào con đường hắc đạo, từ một lưu manh nửa mùa tự mình xây dựng thế lực trở thành lão đại một phương như ngày nay." +
    " Đưa ngón tay thon dài lên khóe mắt, hắn chợt nhận thấy có một cỗ chất lỏng từ khóe mắt chảy ra, đã bao lâu rồi hắn chưa rơi lệ. Kể từ khi cha mẹ và em gái mất, có lẽ đã vài năm, chục năm thậm chí gần nửa đời, kể từ đó đến giờ hắn chưa từng rơi lệ.");

let info_7 = new Information("XIN LỖI, EM CHỈ LÀ CON ĐĨ", "Tào Đình", "Ngôn Tình, Ngược", 1256, "Truyện thể loại siêu ngược, các bạn chú ý chuẩn bị tâm lý trước khi đọc.\n" +
    "\n" +
    "Đây không phải là cuốn tiểu thuyết dâm loan, đây chỉ là một câu chuyện xúc động lòng người sâu sắc, cuốn sách nói về cái đẹp, và bày tỏ về nỗi đau, của Hạ Âu một cô gái mang tiếng là đĩ và người bạn trai Tiểu Hà Bân. những trắc trở trong đời cô thuật lại một chuyện tình đau xót.\n" +
    "\n" +
    "truyện được đăng tải lần đầu trên mạng book.mop đã được hàng chục triệu độc giả người Hoa bình chọn là tác phẩm kinh điển mới của dòng văn học mạng của thế hệ người viết mới. bản dịch này theo đúng nguyên tắc ngắn gọn và chân thực so vơi bản sửa chữa trong lần in đầu của truyện năm 2005\n" +
    "\n" +
    "Lời tựa: “Nếu em là một cô gái trinh, tôi sẽ cưới em làm vợ. nhưng xin lỗi, em chỉ là một con đĩ”");


library.story.push(info_1, info_2, info_3, info_4, info_5, info_6, info_7);


let obj = document.getElementById('input');

function search() {

    for (let i = 0; i < library.story.length; i++) {
        if (obj.value === library.story[i].name) {
            document.getElementById('demo1').innerHTML = library.story[i].getInformation();
            break;
        } else {
            document.getElementById('demo1').innerHTML = "không có truyện này";
        }
    }
}

function addInformation() {
    let newName = document.getElementById('nameAdd').value;
    let newAuthor = document.getElementById('authorAdd').value;
    let newGenre = document.getElementById('genreAdd').value;
    let newChap = document.getElementById('chapAdd').value;
    let newContent = document.getElementById('contentAdd').value;

    let newInformation = new Information(newName, newAuthor, newGenre, newChap, newContent);
    library.story.push(newInformation);

    display();

}

function display() {
    let printArray = '';
    for (let i = 0; i < library.story.length; i++) {
        printArray += '<tr>';
        printArray += '<td>' + library.story[i].name + '</td>';
        printArray += '<td><button onclick="editStory(' + i + ')">Edit</button></td>';
        printArray += '<td><button onclick="deleteStory(' + i + ')">Delete</button></td>';
        printArray += '</tr>';
    }
    document.getElementById('ba').innerHTML = printArray;
}



function deleteStory(index) {
    library.story.splice(index, 1);
    display();
}

function editStory(index) {
    for (let i = 0; i < library.story.length; i++) {
        library.story[index].name = prompt("Nhập tên cần sửa");
        library.story[index].author = prompt("Nhập tác giả cần sửa");
        library.story[index].genre = prompt("Nhập thể loại cần sửa");
        library.story[index].chap = prompt("Nhập chap cần sửa");
        library.story[index].content = prompt("Nhập nội dung cần sửa");
        break;
    }


    display();
}