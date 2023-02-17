class function creatGroupAvatar(avatars: [String], finished: @escaping (_ data: UIImage?) -> ()) {
	let viewWidth: CGFloat = 60

	let avatarCount = avatars.count > 4 ? 4:avatars.count
	let avatarWidth = viewWidth * 0.5 * 0.85
	let space_twoAvatar = (viewWidth - avatarWidth * 2) / 3 //一行两个头像的间距
	let space_avatar = (viewWidth - avatarWidth) * 0.5 //一行只有一个头像的间距

	var x = avatarCount % 2 == 0 ? space_twoAvatar:space_avatar
	var y = avatarCount > 2 ? space_twoAvatar:space_avatar
	//设置第一个头像显示的位置
	if avatarCount == 1 {
			x = 0
			y = 0
	} else if avatarCount == 2 {
			x = space_twoAvatar
			y = space_avatar
	} else if avatarCount == 3 {
			x = space_avatar
			y = space_twoAvatar
	} else if avatarCount == 4 {
			x = space_twoAvatar
			y = space_twoAvatar
	}
	//创建contentView
	let vi = UIView(frame: CGRect(x: 0, y: 0, width: viewWidth, height: viewWidth), backGroundColor: RGB(r: 0, g: 0, b: 0, a: 0.6))
	//计算当前是否加载完成所有头像
	var imgCount = 0
	for i in 0..<avatarCount {
			let avatarUrl = avatars[i]
			let imgView = UIImageView(frame: CGRect(x: x, y: y, width: avatarWidth, height: avatarWidth))
			imgView.contentMode = .scaleAspectFill
			imgView.layer.masksToBounds = true
			vi.addSubview(imgView)
			//加载头像
			imgView.sd_setImage(with: URL(string: avatarUrl), placeholderImage: ImageOfAssets(withName: ""), completed: { (image, error, type, url) in
					imgCount+=1 //计数加1
					if imgCount == avatarCount {
							//开启画布绘制九宫格头像
							UIGraphicsBeginImageContextWithOptions(vi.size, false, 2)
							vi.layer.render(in: UIGraphicsGetCurrentContext()!)
							let viImage = UIGraphicsGetImageFromCurrentImageContext()
							UIGraphicsEndPDFContext()

							let imageRef = viImage?.cgImage
							if let imageRefRect = imageRef?.cropping(to: CGRect(x: 0,
																																	y: 0,
																																	width: vi.width * 2,
																																	height: vi.width * 2)) {
									let finalImage = UIImage(cgImage: imageRefRect)
									DispatchQueue.main.async {
											finished(finalImage)
									}
							}
					}
			})
			//更改下一个头像的显示位置
			if avatarCount == 3 {
					if i == 0 {
							y = avatarWidth + space_twoAvatar * 2
							x = space_twoAvatar
					} else {
							x = avatarWidth + space_twoAvatar * 2
					}
			} else if (avatarCount == 4) {
					if (i == 1) {
							y = avatarWidth + space_twoAvatar * 2
							x = space_twoAvatar
					} else {
							x = avatarWidth + space_twoAvatar * 2
					}
			} else if avatarCount == 2 {
					x = avatarWidth + space_twoAvatar * 2
			}
	}
}
