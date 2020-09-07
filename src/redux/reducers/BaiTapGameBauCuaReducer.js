
const initialState = {
    danhSachCuoc: [
        { ma: 'ga', hinhAnh: './img/BaiTapGameBauCua/ga.png', diemCuoc: 0 },
        { ma: 'bau', hinhAnh: './img/BaiTapGameBauCua/bau.png', diemCuoc: 0 },
        { ma: 'ca', hinhAnh: './img/BaiTapGameBauCua/ca.png', diemCuoc: 0 },
        { ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png', diemCuoc: 0 },
        { ma: 'cua', hinhAnh: './img/BaiTapGameBauCua/cua.png', diemCuoc: 0 },
        { ma: 'tom', hinhAnh: './img/BaiTapGameBauCua/tom.png', diemCuoc: 0 },
    ],
    tongDiem: 1000,
    mangXucXac: [
        { ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png' },
        { ma: 'cua', hinhAnh: './img/BaiTapGameBauCua/cua.png' },
        { ma: 'tom', hinhAnh: './img/BaiTapGameBauCua/tom.png' },
    ]
}



export default (state = initialState, action) => {
    switch (action.type) {

        case 'DAT_CUOC_BAU_CUA': {
            // console.log('action',action)
            //Tìm trong danhSachCuoc => quân cược nào được click sẽ tăng hoặc giảm điểm
            const danhSachCuocUpdate = [...state.danhSachCuoc];
            const index = danhSachCuocUpdate.findIndex(qc => qc.ma === action.quanCuoc.ma);
            if (index != -1) {
                if (action.tangGiam && state.tongDiem > 0) {
                    danhSachCuocUpdate[index].diemCuoc += 100;
                    state.tongDiem -= 100;
                } else {
                    if (danhSachCuocUpdate[index].diemCuoc > 0) {
                        danhSachCuocUpdate[index].diemCuoc -= 100;
                        state.tongDiem += 100;
                    }
                }
            }

            state.danhSachCuoc = danhSachCuocUpdate;
            return { ...state }
        }

        case 'PLAY_GAME_BAU_CUA': {
            console.log(action);
            const mangXucXacNgauNhien = [];

            for (let i = 0; i < 3; i++) {
                //Tạo ra 1 số ngẫu nhiên từ 0 -> 5
                let soNgauNhien = Math.floor(Math.random() * 6);
                const xucXacNgauNhien = state.danhSachCuoc[soNgauNhien];
                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }
            //Cập lại mảng xúc xắc state.mangXucXac = mangXucXacNgauNhien
            state.mangXucXac = mangXucXacNgauNhien;
            console.log('mangXXNN', state.mangXucXac)
            //Xử lý tăng điểm thưởng
            mangXucXacNgauNhien.forEach((xucXacNN,index) => {

                let indexDSCuoc = state.danhSachCuoc.findIndex(qc=>qc.ma === xucXacNN.ma);
                if(index!==-1){
                    state.tongDiem += state.danhSachCuoc[indexDSCuoc].diemCuoc;
                }
            }) 

            //Xử lý hoàn tiền
            state.danhSachCuoc.forEach((qc,index)=>{
                let indexXucXacNN = mangXucXacNgauNhien.findIndex(xxnn=>xxnn.ma === qc.ma);
                if(indexXucXacNN!==-1){
                    state.tongDiem += qc.diemCuoc;
                }
            })
            
            //Xử lý làm mới game
            state.danhSachCuoc = state.danhSachCuoc.map((qc,index) => {
              return {...qc,diemCuoc:0} 
            })
            return { ...state }
        }

        case 'CHOI_LAI': {
            state.tongDiem = 1000;
            state.danhSachCuoc = state.danhSachCuoc.map((qc,index) => {
                return {...qc,diemCuoc:0} 
              });
            return {...state}
        }


        default:
            return state
    }
}
